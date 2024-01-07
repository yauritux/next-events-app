import EventSummary from "@/components/event-detail/EventSummary";
import EventLogistics from "@/components/event-detail/EventLogistics";
import EventContent from "@/components/event-detail/EventContent";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  getEventById,
  featuredEvents,
} from "@/providers/EventFirebaseRepository";
import { Event } from "@/models/Event";
import Head from "next/head";

function EventDetailPage({ selectedEvent }: { selectedEvent: Event }) {
  if (!selectedEvent) {
    return <div className="center">Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{selectedEvent.title}</title>
        <meta name="description" content={selectedEvent.description} />
      </Head>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics
        date={selectedEvent.date}
        address={selectedEvent.location}
        image={selectedEvent.image}
        imageAlt={selectedEvent.title}
      />
      <EventContent>
        <p>{selectedEvent.description}</p>
      </EventContent>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const eventId = context.params?.id;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await featuredEvents(); // we merely retrieve featured events to reduce any unnecessary overhead times when loading all events.

  const paths = events.map((event) => ({ params: { id: event.id } }));
  return {
    paths: paths,
    fallback: true, // any possibly call to an event that is not pre-rendered yet will trigger the server to load the page at runtime for that particular incoming request.
  };
};

export default EventDetailPage;
