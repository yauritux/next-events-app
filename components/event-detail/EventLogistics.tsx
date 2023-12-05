import AddressIcon from "../icons/AddressIcon";
import DateIcon from "../icons/DateIcon";
import LogisticItems from "./LogisticItems";
import classes from "./event-logistics.module.css";

function EventLogistics({
  date,
  address,
  image,
  imageAlt,
}: {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const addressText = address.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticItems icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticItems>
        <LogisticItems icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticItems>
      </ul>
    </section>
  );
}

export default EventLogistics;
