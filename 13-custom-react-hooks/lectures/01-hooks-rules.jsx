// * 1. Only call hooks at the top level. Don’t call hooks inside loops, conditions, or nested functions.

// * 2. Only call hooks from React function components. Don’t call hooks from regular JavaScript functions.
// (There is an exception to this rule: you can call hooks from custom hooks, which are JavaScript functions whose names start with ”use” and that may call other hooks.)

// useFetch.js
import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch');

        const data = await res.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, isLoading, error }; // always return what components need
}

// AvailablePlaces.jsx
import { useFetch } from './hooks/useFetch.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const { data, isLoading, error } = useFetch('http://localhost:3000/places');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Places
      title="Available Places"
      places={data?.places}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
