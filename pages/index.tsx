import EventList from "@/components/events/EventList";

// import { featuredEvents } from "@/providers/EventRepository";

import { allEvents } from "@/providers/EventMongoRepository";
import { useEffect, useState } from "react";

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getEvents() {
      const response = await allEvents();
      console.log("Home:events::response=");
      console.log(response);
      setEvents(response);
    }
    getEvents();
  });

  // const events = featuredEvents();

  return <EventList items={events} />;
}

export default Home;
