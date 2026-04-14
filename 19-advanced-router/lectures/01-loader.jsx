// ? Loader / useLoaderData()
// * A loader is a function that runs before your route renders to fetch data.
// 👉 “Get the data FIRST, then show the page”

// Before loader we had to fetch data using useEffect
useEffect(() => {
  fetch('/api/products')
    .then((res) => res.json())
    .then((data) => setProducts(data));
}, []);
/* ❌ Problems:
    - Page renders EMPTY first
    - Then loads data
    - You handle loading + errors manually */

const router = {
  // * With loader (modern way)
  path: 'products',
  element: <Products />,
  loader: async () => {
    const res = await fetch('https://dummyjson.com/products');
    return res.json();
  },
};

// 🔥 Using the data in component
import { useLoaderData } from 'react-router-dom';

export default function Products() {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  return (
    <ul>
      {data.products.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}

// ? We can also store loader function inside component itself and then just import it in the App.jsx
export async function eventsLoader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // ! Error handling
    return { isError: true, message: 'Could not fetch events...' };
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

const router2 = {
  path: 'products',
  element: <Products />,
  loader: eventsLoader,
};
