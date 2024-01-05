import clientPromise from "@/lib/mongodb";

export default async (req: any, res: any) => {
  try {
    const client = await clientPromise;
    const db = client.db("eventsdb");

    const events = await db
      .collection("events")
      .find({ isFeatured: true })
      .limit(10)
      .toArray();

    res.json(events);
  } catch (e) {
    console.error(e);
  }
};
