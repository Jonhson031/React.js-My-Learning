// ? Better erros in loader
export async function eventsLoader() {
  const res = await fetch('http://localhost:8080/events1');

  if (!res.ok) {
    // // ! Error handling
    // return { isError: true, message: 'Could not fetch events...' };
    // throw new Response
    throw new Response('Could not fetch events', {
      status: res.status,
    });
  } else {
    return res;
  }
}

// ? Error page:
import { useRouteError } from 'react-router-dom';
import PageContent from '../components/PageContent';

export default function ErrorPage() {
  const error = useRouteError();

  // * Default values for error
  let title = 'An Error Occured!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data.message;
  }

  if ((error.status = 404)) {
    title = 'Not found!';
    message = 'Could not find source or page';
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
}
