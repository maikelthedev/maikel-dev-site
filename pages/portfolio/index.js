import { clients } from "@/data/portfolio-data";
import { Fragment } from "react";
import Client from "@/components/client";
import Hero from "@/components/hero";

function Portfolio() {
  const header = {
    subtitle: "Portfolio of Clients",
    title: "A glimpse into my client portfolio, past and present",
    slogan:
      "All the projects I have collaborated on, from small to large, from simple to complex. Click on each for details"
  };

  return (
    <Fragment>
      <Hero header={header} />
      <div className="bg-white p-5">
        {clients.map((client) => (
          <Client key={client.id} client={client} />
        ))}
      </div>
    </Fragment>
  );
}

export default Portfolio;
