import classes from "./event-item.module.css";

function EventItem(props: {
  id: string;
  image: string;
  title: string;
  date: string;
  location: string;
}) {
  const { id, image, title, date, location } = props;
  return (
    <li key={id} className={classes.item}>
      <img src={image} alt="" className={classes.item} />
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
    </li>
  );
}

export default EventItem;
