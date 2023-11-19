import { ReactElement } from "react";
import MainHeader from "./MainHeader";

function Layout(props: { children: ReactElement<HTMLElement> }) {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
