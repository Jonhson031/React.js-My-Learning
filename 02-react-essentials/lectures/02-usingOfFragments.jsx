import { Fragment } from 'react';

// When we have multiply children elements inside our components, we need to wrap them in fragment.
// It could be either regular div element, or we can use empty element <></>, or export Fragment 
export default function App() {
  return (
    <>
      <li></li>
      <li></li>
    </>
  );
}
