import { Fragment } from "react";
import Hero from "@/components/hero";

function About() {
    const header = {
        subtitle: "About",
        title: "Maikel Frias Mosquea",
        slogan: "Multi-lingual Full-Stack Developer, Cloud Architect & DevOps Engineer",
    }

    return (
        <Fragment>
          <Hero header={header} />
          <div className="bg-white p-5">
            <h1 className="mx-auto text-center text-2xl">To be completed</h1>
          </div>
        </Fragment>
      );

}

export default About;
