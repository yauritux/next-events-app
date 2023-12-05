import classes from "./results-title.module.css";
import Button from "../ui/Button";

function ResultsTitle(props: { date: Date }) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <section className={classes.title}>
        <h1>Events in {humanReadableDate}</h1>
        <Button link="/events">Show All Events</Button>
      </section>
    </>
  );
}

export default ResultsTitle;
