import data from "@/events-data.json";

export type Event = {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  date: string;
  isFeatured: boolean;
};

export function allEvents(): Event[] {
  return data;
}

export function filterEvent(year: number, month: number) {
  return data.filter((event) => {
    const eventDate = event.date.split("-"); // 2023-12-25 => [2023, 12, 25]
    return +eventDate[0] === year && +eventDate[1] === month;
  });
}

export function featuredEvents(): Event[] {
  return data.filter((event) => event.isFeatured);
}

export function getEventById(id: string): Event | undefined {
  return data.find((event) => event.id === id);
}
