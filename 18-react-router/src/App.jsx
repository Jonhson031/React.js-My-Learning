// * Defining Routes
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import RootLayout from './pages/Root.jsx';
import ErrorPage from './pages/Error.jsx';
import ProductDetailsPage from './pages/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />, // * This component will be rendered if user tries to access a page that doesn't exist
    children: [
      { index: true, element: <HomePage /> }, // every object represents React Route
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetailsPage /> }, // to load dynamic routes
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
