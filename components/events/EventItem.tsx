import ArrowRightIcon from "../icons/ArrowRightIcon";
import Button from "../ui/Button";
import classes from "./event-item.module.css";

function EventItem(props: {
  id: string;
  image: string;
  title: string;
  date: string;
  location: string;
}) {
  const { id, image, title, date, location } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li key={id} className={classes.item}>
      <img src={"/" + image} alt="" className={classes.item} />
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <time>{date}</time>
        </div>
        <div>
          <address>{location}</address>
        </div>
      </div>
      <div className={classes.actions}>
        <Button link={exploreLink}>
          <span>
            Explore Event <ArrowRightIcon />
          </span>
        </Button>
      </div>
    </li>
  );
}

export default EventItem;
