// ? Action Function
// * Used to handle form submissions and other actions that modify data.
// * They are defined in the route configuration and can be accessed using the useActionData hook in the component.

import { redirect } from 'react-router-dom';
import EventForm from '../components/EventForm';

export default function NewEvent() {
  return <EventForm></EventForm>;
}

export async function actionNewEvent({ request, params }) {
  const data = await request.formData();

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  const res = await fetch(`http://localhost:8080/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (!res.ok) {
    throw new Response({
      message: 'Could not save new event!',
      status: 500,
    });
  }
  return redirect('/events');
}

// * Form Component:
import { Form } from 'react-router-dom';

export function NewEvent() {
  return (
    <Form method="post">
      <input name="title" placeholder="Title" />
      <input name="price" placeholder="Price" />
      <button>Add Product</button>
    </Form>
  );
}

// * in App.jsx:
const c = { path: 'new', element: <NewEvent />, action: actionNewEvent };
