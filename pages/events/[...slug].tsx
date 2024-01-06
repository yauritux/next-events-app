import { useRouter } from "next/router";

import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/results-title/ResultsTitle";
import { GetServerSideProps } from "next";
import { filterEvents } from "@/providers/EventFirebaseRepository";
import { Event } from "@/models/Event";
import Button from "@/components/ui/Button";
import ErrorAlert from "@/components/ui/ErrorAlert";

function FilteredEventsPage(props: {
  events?: Event[];
  hasError?: boolean;
  date: { year: number; month: number };
}) {
  if (props.hasError) {
    return (
      <>
        <ErrorAlert>Invalid filter, please adjust your value!</ErrorAlert>;
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>No events found for your selected criteria!</ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  const filterData = params?.slug;

  const filteredYear = filterData ? filterData[0] : 2020;
  const filteredMonth = filterData ? filterData[1] : 1;

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return { props: { hasError: true, date: { year: 2020, month: 1 } } };
  }

  const filteredEvents = await filterEvents({ year: numYear, month: numMonth });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
};

export default FilteredEventsPage;
