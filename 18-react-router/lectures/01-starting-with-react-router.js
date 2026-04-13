// ? React Router
// * 1) Install npm package
// npm i react-router-dom

// * 2) Define which routes (url paths) we want to support and which components should be loaded for different paths

// * 3) Activate our router and load route definitions that we defined in the step 2.

// * 4) Make sure that we have all these components that we wanna load

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> }, // every object represents React Route
    {},
]);

export default function App() {
    // * Activating and loading our routes
    return <RouterProvider router={router}></RouterProvider>;
}