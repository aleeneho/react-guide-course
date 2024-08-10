import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Some Event',
  },
  {
    id: 'e2',
    title: 'Another Event',
  },
  {
    id: 'e3',
    title: 'Yet Another Event',
  },
]

function EventsPage () {
  return (
    <>
      <h1>
        Event Page
      </h1>
      <ul>
        {DUMMY_EVENTS.map(event =>
          <li key={event.id}><Link to={`/events/${event.id}`}>{event.title}</Link></li>
        )}
      </ul>
    </>
  );
}

export default EventsPage;
