import EventList from "@/components/events/EventList";

import { featuredEvents } from "@/providers/EventRepository";

export default function Home() {
  const events = featuredEvents();

  return <EventList items={events} />;
}
