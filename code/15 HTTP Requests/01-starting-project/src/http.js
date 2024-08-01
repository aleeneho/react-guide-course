import { renderToStaticNodeStream } from "react-dom/server";

export async function fetchAvailablePlaces () {
  const response = await fetch('http://localhost:3000/places');
  const resData = await response.json();

   if (!response.ok) {
   // cosnt error = new Error('Failed o fetch places.')
    throw new Error('Failed to fetch places.');
  }

  return resData.places;
}
