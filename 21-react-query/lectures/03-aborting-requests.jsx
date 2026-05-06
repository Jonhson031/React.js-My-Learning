import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useRef } from "react";
// * The Query Configuration Object & Aborting Requests

// ? React Query supports request cancellation automatically using AbortController.

export const fetchUsers = async ({ signal }) => {
  const res = await fetch("/api/users", { signal });
  return res.json();
};

export default function FindEventSection() {
  const searchElement = useRef();
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { search: searchTerm }],
    // * By constructing queryKey dynamically. React Query can cache (and reuse) diffrent data for diffrent keys based on the same query.

    // * Query functions receive an object as an argument with a signal property, which is an AbortSignal instance. 
    // You can pass this signal to your fetch function. 
    // React Query will automatically abort the request if the component unmounts or if a new request is made with the same query key before the previous one finishes.
    queryFn: ({ signal }) => fetchEvents({ signal, searchTerm }),
  });

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content};
    </section>
  );
}
