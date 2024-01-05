import EventList from "@/components/events/EventList";
import { Event } from "@/models/Event";

import {
  featuredEvents,
  initializeDataSeed,
} from "@/providers/EventDBRepository";
import { GetStaticProps } from "next";

function Home({ events }: { events: Event[] }) {
  return <EventList items={events} />;
}

export const getStaticProps: GetStaticProps = async () => {
  console.log("Re-generate initial data seed...");
  await initializeDataSeed();

  return {
    props: {
      events: await featuredEvents(),
    },
    revalidate: 5,
  };
};

export default Home;
