import { Fragment } from "react";
import Reasons from "@/components/reasons";
import Hero from "@/components/hero";
import Skillset from "@/components/skillset";
import { headers } from "@/data/headers";
import { useState, useEffect } from "react";

export default function Home() {
  const header = headers.home;

  return (
    <Fragment>
      <div className="custom-white-background">
        <Hero header={header} />
        <Reasons />
        <Skillset />
      </div>
    </Fragment>
  );
}
