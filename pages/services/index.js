import Hero from "@/components/hero";
import { services } from "@/data/services-data";
import { Fragment } from "react";
import { headers } from "@/data/headers";

function Portfolio() {
  const header = headers.services 
  return (
    <Fragment>
      <Hero header={header} />
      <div className="md:columns-3 pt-10 gap-8 p-5 bg-indigo-700">
        {services.map((service) => (
          <div key={service.id} className="mb-8 w-full break-inside-avoid-column bg-white rounded-lg p-4">
            <h1 className="text-2xl font-bold text-indigo-900">
              {service.name}
            </h1>
            <p className="text-gray-700 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default Portfolio;
