import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm.jsx';

export default function EditEvent() {
  const data = useRouteLoaderData('event-detail');

  return <EventForm method="patch" event={data.event}></EventForm>;
}
