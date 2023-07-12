import Hero from "@/components/hero";
import { services } from "@/data/services-data";
import { Fragment } from "react";
import { headers } from "@/data/headers";
import Link from "next/link";

function Portfolio() {
  const header = headers.services;
  return (
    <Fragment>
      <Hero header={header} />
      <div className="bg-indigo-700">
        <div className="bg-indigo-700 pt-10">
          <Link href="#skillset" id="skillset">
            <h1
              className="text-white border-2 border-dashed border-white text-center text-4xl 
          font-bold2 bg-indigo-700 mx-auto max-w-xs p-5 rounded-lg
           hover:bg-white hover:text-indigo-700 duration-200 font-bold
          "
            >
              Services
            </h1>
          </Link>
        </div>
        <div className="md:columns-3 pt-10 gap-8 p-5 bg-indigo-700 lg:max-w-7xl lg:mx-auto ">
          {services.map((service) => (
            <div
              key={service.id}
              className="mb-8 w-full break-inside-avoid-column custom-white-background rounded-lg p-4"
            >
              <h1 className="text-2xl font-bold custom-text-indigo-900">
                {service.name}
              </h1>
              <p className="custom-text-gray-700 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Portfolio;
