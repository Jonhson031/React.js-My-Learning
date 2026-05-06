// ? React (Tanstack) Query
// * React Query is a powerful library for managing server state in React applications.
// * It provides a simple and efficient way to fetch, cache, and update data from APIs, making it easier to handle async operations and improve the performance of your application.

// Installation:
// npm i @tanstack/react-query

// * Tanstack Query does not sends HTTP requests (not on it's own)
// You have to write code to send the actual HTTP request
// Tanstack Query then manages data, errors, caching & much more

// ? Basic Setup:
// *  1) Wrap your app with the provider:
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/events" />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

// * 2) 🔍 Fetch Data (useQuery)
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUsers = async () => {
  const { data } = await axios.get("/api/users");
  return data;
};

export function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    // queryKey used to cache data that yielded on that request.
    // So the response from that request, could be reused in future if you want to send the same request.
    queryFn: fetchUsers,
    staleTime: 5000, // How long data is considered “fresh”
    // gcTime: 10000 // How long unused data stays in memory before being deleted
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
