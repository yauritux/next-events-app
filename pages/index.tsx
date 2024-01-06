import EventList from "@/components/events/EventList";
import { Event } from "@/models/Event";

import { featuredEvents } from "@/providers/EventFirebaseRepository";
import { GetStaticProps } from "next";

function Home({ events }: { events: Event[] }) {
  return <EventList items={events} />;
}

export const getStaticProps: GetStaticProps = async () => {
  console.log("Pre-rendering initial data seed...");

  return {
    props: {
      events: await featuredEvents(),
    },
    revalidate: 1800, // rebuild the page every 1800 seconds / every half hour
  };
};

export default Home;
