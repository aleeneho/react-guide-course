import { useState, useEffect } from 'react';
import Places from './Places.jsx';

//  localStorage.geyItem('places')

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  cosnt [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching (true);

      try {
        const response = await fetch('http://localhost:3000/places');
        const resData = await response.json();

        if (!response.ok) {
          // cosnt error = new Error('Failed o fetch places.')
          throw new Error('Failed to fetch places.');
        }
      } catch (error) {
        setError(error);
      }

      // setAvailablePlaces(resData.places);
      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

    // fetch('http://localhost:3000/places')
    // .then((response) => {
    //   return response.json();
    // })
    // .then((resData) => {
    //   setAvailablePlaces(resData.places);
    // });
  // }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText='Fetching place data...'
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
