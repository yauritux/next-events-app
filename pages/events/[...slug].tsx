import { useRouter } from "next/router";

import { filterEvent } from "@/providers/EventRepository";
import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/results-title/ResultsTitle";

function FilteredEventsPage() {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear < 2023 ||
    filteredYear > 2024 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return <p className="center">Invalid filter, please adjust your value!</p>;
  }

  const filteredEvents = filterEvent(filteredYear, filteredMonth);

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <div className="center">
          No events found for your selected criteria!
        </div>
      </>
    );
  }

  const date = new Date(filteredYear, filteredMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}

export default FilteredEventsPage;
