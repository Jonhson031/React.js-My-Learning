// ? Submitting Data Programmatically
// * Trigger action() without using Form element

import { Link, useSubmit } from 'react-router-dom';
import classes from './EventItem.module.css';

export default function EventItem({ event }) {
  // * useSubmit - let's you submit form programmatically
  const sumbit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      // send delete request to the server
      sumbit(null, { method: 'DELETE' });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export async function actionDeleteEvent({ request, params }) {
  const res = await fetch(`http://localhost:8080/events/${params.eventId}`, {
    method: request.method,
  });

  if (!res.ok) {
    throw new Response({
      message: 'Could not delete this event!',
      status: 500,
    });
  }
  return redirect('/events');
}

// * In router:
const router = { index: true, element: <EventDetail />, action: actionDeleteEvent };
