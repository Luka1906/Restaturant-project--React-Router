import { Link } from "react-router-dom";
const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Some event",
  },
  {
    id: "e2",
    title: "Some event 2",
  },
  {
    id: "e3",
    title: "Some event 3",
  },
];

export default function EventsPage() {

  return (
    <div>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
       
            <Link  to={event.id}>
            {event.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
