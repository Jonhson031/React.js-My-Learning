import { redirect, useRouteLoaderData, Await } from 'react-router-dom';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

export default function EventDetail() {
  const { event, events } = useRouteLoaderData('event-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={event}>{(loadedEvent) => <EventItem event={loadedEvent} />}</Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={events}>{(loadedEvents) => <EventsList events={loadedEvents} />}</Await>
      </Suspense>
    </>
  );
}

async function loadEvent(id) {
  const res = await fetch(`http://localhost:8080/events/${id}`);

  if (!res.ok) {
    throw new Response({
      message: 'Could not fetch event!',
      status: 500,
    });
  } else {
    const resData = await res.json();
    return resData.event;
  }
}

async function loadEvents() {
  const res = await fetch('http://localhost:8080/events');

  if (!res.ok) {
    throw new Response({
      message: 'Could not fetch events!',
      status: 500,
    });
  } else {
    const resData = await res.json();
    return resData.events;
  }
}

export async function eventDetailLoader({ params }) {
  const id = params.eventId;

  return {
    event: await loadEvent(id),
    events: await loadEvents(),
  };
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
