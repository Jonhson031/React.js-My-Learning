import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

import Header from "../Header.jsx";

import { fetchEvent, deleteEvent, queryClient } from "../../utils/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { useState } from "react";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isDeleting, setIsDeleting] = useState();

  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
        // refetchType controls which queries should be refetched after mutation. 
        // By default, all queries with matching queryKey will be refetched. 
        // But you can also specify to refetch only active queries or no queries at all.
      });
      navigate("/events");
    },
  });

  function handleDelete() {
    mutate({ id });
  }

  return (
    <>
      {isDeleting && (
        <Modal onClose={() => setIsDeleting(false)}>
          <h2>Are you sure?</h2>
          <p>
            Did you really want to delete this event? This action can not be
            undone.
          </p>
          <div className="form-actions">
            <button
              className="button-text"
              onClick={() => setIsDeleting(false)}
            >
              Cancel
            </button>
            <button
              className="button"
              onClick={handleDelete}
              disabled={isPending}
            >
              {isPending ? "Deleting..." : "Delete"}
            </button>
          </div>
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isLoading && <LoadingIndicator />}
      {isSuccess && (
        <article id="event-details">
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={() => setIsDeleting(true)} disabled={isPending}>
                {isPending ? "Deleting..." : "Delete"}
              </button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>
                  {data.date} | {data.time}
                </time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      )}
      {isError && (
        <ErrorBlock
          title="An error occured"
          message={error.info?.message || "Failed to fetch event"}
        />
      )}
    </>
  );
}
