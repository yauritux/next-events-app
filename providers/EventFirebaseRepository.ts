import { Event } from "@/models/Event";

export async function allEvents() {
  const response = await fetch(
    "https://nextjs-course-20910-default-rtdb.firebaseio.com/events.json"
  );
  const data: any = response.json();

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
