import clientPromise from "@/lib/mongodb";
import { allEvents } from "@/providers/EventRepository";

export default async (req: any, res: any) => {
  try {
    const client = await clientPromise;
    const db = client.db("eventsdb");

    // remove initial data seed
    await db.collection("events").deleteMany({
      id: {
        $in: ["e1", "e2", "e3", "e4", "e5", "e6"],
      },
    });

    // reinitialize data
    const eventRecords = allEvents();
    const result = await db.collection("events").insertMany(eventRecords);

    console.log(`${result.insertedCount} documents were inserted.`);

    res.json({
      message: `${result.insertedCount} documents were inserted`,
      data: eventRecords,
    });
  } catch (e) {
    console.error(e);
  }
};
