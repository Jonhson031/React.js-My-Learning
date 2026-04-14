// ? useRouteLoaderData()
// * Used to load data for child components
// * For example we fetch data on parent component, but then we need to use it also for few others child components
// ! useLoaderData in this situation not gonna work, this is why we have useRouteLoaderData:

import { useRouteLoaderData } from 'react-router-dom';

// Export loader in parent component
export async function eventDetailLoader({ request, params }) {
  const res = await fetch(`http://localhost:8080/events/${params.eventId}`);

  if (!res.ok) {
    throw new Response({
      message: 'Could not fetch event!',
      status: 500,
    });
  } else {
    return res;
  }
}

// In the App.jsx set loader and loader id for parent route:
const router = createBrowserRouter([
  {
    path: ':eventId',
    id: 'event-detail', // * set loader id
    loader: eventDetailLoader, // * set loader
    children: [
      // * child component that will use this loader:
      { index: true, element: <EventDetail /> },
      { path: 'edit', element: <EditEvent /> },
    ],
  },
]);

// Import data from loader in the child component
import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm.jsx';

export default function EditEvent() {
  const data = useRouteLoaderData('event-detail');

  return <EventForm event={data.event}></EventForm>;
}
