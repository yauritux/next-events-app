import { UrlObject } from "url";
import classes from "./button.module.css";
import Link from "next/link";

function Button(props: {
  link: string | UrlObject | null | undefined;
  children: JSX.Element | string;
  onClick?: any;
}) {
  if (props.link) {
    return (
      <Link href={props.link} className={classes.btn}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
