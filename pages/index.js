import { Fragment } from "react";
import Reasons from "@/components/reasons";
import Hero from "@/components/hero";
import Skillset from "@/components/skillset";
import { headers
 } from "@/data/headers";
export default function Home() {
  const header = headers.home

  return (
    <Fragment>
      <Hero header={header} />
      <Reasons />
      <Skillset />
    </Fragment>
  );
}
