import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import ErrorPage from '../Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import {fetchData} from '../fetchData.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function getAvailablePlaces() {
      try {
        const data = await fetchData('http://localhost:3000/places')
        // navigator.geolocation.getCurrentPosition((position) => {
        //   const sortedPlaces = sortPlacesByDistance(
        //     data.places,
        //     position.coords.latitude,
        //     position.coords.longitude,
        //   );
        //   setAvailablePlaces(sortedPlaces);
        // });
        setAvailablePlaces(data);
      } catch (err) {
        console.error(err);
        setError({ message: err.message || 'Could not load places, please try again later!' });
      } finally {
        setIsLoading(false);
      }
    }
    getAvailablePlaces();
  }, []);

  if (error) {
    return <ErrorPage title="Error Occured" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
      isLoading={isLoading}
      loadingText="Loading fetch data..."
    />
  );
}
