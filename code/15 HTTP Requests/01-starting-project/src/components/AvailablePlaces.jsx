import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';

//  localStorage.geyItem('places')

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

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

        navigator.geolocation.getCurrentPosition((position) => {
          // console.log(position);
          const sortedPlaces = sortPlacesByDistance(resData.places, position.coords.latitude, position.coords.longitude);
          setAvailablePlaces(resData.places);
          setIsFetching(false);
        })

      } catch (error) {
        setError({message: error.message || 'Could not fetch places, please try again later.'});
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title='An error occurred!' message={error.message} />;
  }

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
