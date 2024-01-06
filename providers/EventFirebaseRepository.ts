import { Event } from "@/models/Event";
import axios from "axios";

export async function allEvents() {
  const response = await axios.get(
    "https://nextjs-course-20910-default-rtdb.firebaseio.com/events.json"
  );

  const data: any = response.data;

  const events: Event[] = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function featuredEvents() {
  const eventRecords = await allEvents();
  return eventRecords.filter((event) => event.isFeatured);
}

export async function getEventById(id: string | string[] | undefined) {
  const eventRecords = await allEvents();
  return eventRecords.find((event) => event.id === id);
}

export async function filterEvents(dateFilter: {
  year: number;
  month: number;
}) {
  const { year, month } = dateFilter;

  const eventRecords = await allEvents();

  let filteredEvents = eventRecords.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
