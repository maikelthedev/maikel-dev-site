import { Fragment } from "react";
import Reasons from "@/components/reasons";
import Hero from "@/components/hero";
import Skillset from "@/components/skillset";
import { headers } from "@/data/headers";
import { useState, useEffect } from "react";
import { slogans, roles } from "@/data/slogans";

export default function Home() {
  const header = headers.home;

  const [currentSlogan, setCurrentSlogan] = useState(header.title);
  const [currentSubtitle, setCurrentSubtitle] = useState(header.subtitle);

  useEffect(() => {
    let sloganIndex = 0;
    let rolesIndex = 0;

    const mainSloganInterval = setInterval(() => {
      sloganIndex = (sloganIndex + 1) % slogans.length;
      header.title = slogans[sloganIndex];
      setCurrentSlogan(slogans[sloganIndex]);
    }, 10000); // Change the main slogan every 10 seconds

    const subtitleInterval = setInterval(() => {
      rolesIndex = (rolesIndex + 1) % roles.length;
      header.subtitle = "Maikel the " + roles[rolesIndex];
      setCurrentSubtitle(roles[rolesIndex]);
    }, 3000); // Change the subtitle every 3 seconds

    return () => {
      clearInterval(mainSloganInterval);
      clearInterval(subtitleInterval);
    };
  }, []);

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
