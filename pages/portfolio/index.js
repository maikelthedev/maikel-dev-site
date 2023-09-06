import { clients } from "@/data/portfolio-data";
import { Fragment } from "react";
import Client from "@/components/client";
import Hero from "@/components/hero";
import {headers} from "@/data/headers";

function Portfolio() {
  const header = headers.portfolio; 

  return (
    <Fragment>
      <Hero header={header} />
      <div className="custom-white-background p-5 ">
        {clients.map((client) => (
          <Client key={client.id} client={client} />
        ))}
      </div>
    </Fragment>
  );
}

export default Portfolio;
