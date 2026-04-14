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
      <Await resolve={events}>{(loadedEvents) => <EventsList events={loadedEvents} />}</Await>
    </Suspense>
  );
}

export default Events;

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

export function eventsLoader() {
  return {
    events: loadEvents(),
  };
}
