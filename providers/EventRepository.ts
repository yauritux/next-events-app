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

export function featuredEvents(): Event[] {
  return data.filter((event) => event.isFeatured);
}
