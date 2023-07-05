import { Fragment } from "react";
import Reasons from "@/components/reasons";
import Hero from "@/components/hero";
import Skillset from "@/components/skillset";

export default function Home() {
  const header = {
    subtitle: "Maikel the Developer",
    title: "One Man for All Your Tech Needs",
    slogan:
      "Full Stack development in multi-language environments and with your cloud architecture designed and monitored all by the same person",
  };

  return (
    <Fragment>
      <Hero header={header} />
      <Reasons />
      <Skillset />
    </Fragment>
  );
}
