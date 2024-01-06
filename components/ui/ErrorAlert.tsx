import classes from "./error-alert.module.css";

export default function ErrorAlert(props: { children: JSX.Element | string }) {
  return <div className={classes.alert}>{props.children}</div>;
}
