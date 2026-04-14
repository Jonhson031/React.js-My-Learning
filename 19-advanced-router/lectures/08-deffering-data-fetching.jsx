// ? Deferring Data Fetching
/* 👉 Normally:
- Loader waits for ALL data
- Then renders page

👉 When deferring:
- Render page immediately, load some data later */

import { useLoaderData, Await } from 'react-router-dom';
import { Suspense } from 'react';

import EventsList from '../components/EventsList';

function Events() {
  const { events } = useLoaderData();
  console.log(events);

  // return (
  //   <>
  //     <EventsList events={data.events} />
  //   </>
  // );
  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading</p>}>
        // * while waiting for events to load, fallback shows loading text

      <Await resolve={events}>{(loadedEvents) => <EventsList events={loadedEvents} />}</Await>
      // * Await component waits for promise to resolve and then renders the component with the resolved data
    </Suspense>
  );
}

export default Events;

async function loadEvents(params) {
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

export function eventsLoader() {
  return {
    events: loadEvents(),
  };
}
