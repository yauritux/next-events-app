import EventList from "@/components/events/EventList";
import EventSearch from "@/components/events/EventSearch";
import { allEvents } from "@/providers/EventRepository";
import { useRouter } from "next/router";

function AllEventsPage() {
  const events = allEvents();

  const router = useRouter();

  function findEventHandler(year: number, month: number) {
    const eventSearchPath = `events/${year}/${month}`;

    router.push(eventSearchPath);
  }

  return (
    <>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;
