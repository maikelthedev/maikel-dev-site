import { Fragment } from "react";
import Navigation from "./navigation";
import Footer from "./footer";

function Layout(props) {
  return (
    <Fragment>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;