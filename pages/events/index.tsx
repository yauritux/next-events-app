import EventList from "@/components/events/EventList";
import EventSearch from "@/components/events/EventSearch";
import { Event } from "@/models/Event";
import { allEvents } from "@/providers/EventFirebaseRepository";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

function AllEventsPage({ events }: { events: Event[] }) {
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      events: await allEvents(),
    },
    revalidate: 60,
  };
};

export default AllEventsPage;
