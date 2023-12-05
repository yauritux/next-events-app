import Link from "next/link";

import classes from "./main-header.module.css";
import Button from "../ui/Button";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">MeetupEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Button link="/events">Browse All Events</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
