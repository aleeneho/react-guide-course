import { useRouteLoaderData, json, redirect, defer, Await } from "react-router-dom";
import EventItem from "../components/EventItem";
import { Suspense } from 'react';


function EventDetailPage(){
  const {event, events} = useRouteLoaderData('event-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center'}}>Loading...</p>}>
        <Await resolve={event}>
          {loaderEvent => <EventItem event={loaderEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center'}}>Loading...</p>}>
        <Await resolve={events}>
        {loaderEvents => <EventItem events={loaderEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/events/' +  id);

  if (!response.ok) {
    throw json({message: 'Something went wrong!'}, {status: 500});
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
      // return { isError: true, message: 'Could not load events.' };
      // throw { message: 'Could not fetch events.' };
      // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), { status: 500 });
      throw json({ message: 'Could not fetch events.' }, { status: 500 });
    } else {
    // const resData = await response.json();
    // return resData.events;
    // const res = new Response('any data', {status: 201});
    // return resData;
    // return response;
    const resData = await response.json();
    return resData.event;
  }
}

export async function loader({request, params}){
  const id = params.eventId;

  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
  }



export async function action ({request, params}) {
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
  });


  if (!response.ok) {
    throw json({message: 'Could not delete event'}, {status: 500});
  } else {
    return redirect('/events');
  }
}
