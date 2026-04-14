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

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find source or page';
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
}
