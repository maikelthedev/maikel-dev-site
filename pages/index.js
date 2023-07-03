import { Fragment } from "react";
import Reasons from "@/components/reasons";
import Hero from "@/components/hero";
import Skillset from "@/components/skillset";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Reasons />
      <Skillset />
    </Fragment>
  );
}
