// ? Dynamic Routes
// Let's that we have products page with a hunders of products and for every product we need to create product route.

// * We can create ProductDetails Page
import { useParams } from 'react-router-dom';

export default function ProductDetailsPage() {
  const params = useParams(); // params works the same as Node.js params

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product #{params.productId}</p>
    </div>
  );
}

import ProductDetailsPage from './pages/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />, // * This component will be rendered if user tries to access a page that doesn't exist
    children: [
      { path: '/', element: <HomePage /> }, // every object represents React Route
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetailsPage /> }, // to load dynamic routes
    ],
  },
]);


// * Example, instead of fetching products from back-end
const PRODUCTS = [
  { id: 'p1', title: 'Product 1' },
  { id: 'p2', title: 'Product 2' },
  { id: 'p3', title: 'Product 3' },
];

export default function Products() {
  return (
    <div>
      <h1>Products Page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
