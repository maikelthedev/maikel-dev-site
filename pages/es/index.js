import { Fragment } from "react";
import Hero from "@/components/hero";
import { socials } from "@/data/socials";
import { headers } from "@/data/headers";
import Image from "next/image";
import Link from "next/link";

function Es() {
  const header = headers.spanish;

  return (
    <Fragment>
      <div className="custom-bg-white">
        <Hero header={header} />
      </div>
	  <div>
	  <h1>En un lugar de la mancha de cuyo nombre no puedo acordarme</h1>
	  <p> Es donde completo el texto de esta version en español </p>
	  </div>
    </Fragment>
  );
}

export default Es;
