import { Fragment } from "react";
import Hero from "@/components/hero";
import { testimonials } from "@/data/testimonials-data";
import { headers } from "@/data/headers";
import Link from "next/link";

function Testimonials() {
  const header = headers.testimonials;

  return (
    <Fragment>
      <Hero header={header} />
      <div className="bg-gray-100 p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Testimonials</h1>
          <div className="columns-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full py-2">
                <div className="bg-white rounded shadow relative">
                  <div className="p-6">
                    <p className="text-gray-800 mb-2">{testimonial.content}</p>
                    <Link href={testimonial.link}>
                      <p className="text-gray-600 font-medium hover:underline">
                        {testimonial.name}
                      </p>
                    </Link>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                  <img
                    src={testimonial.logo}
                    alt="Company Logo"
                    className="absolute bottom-2 right-2 h-8 w-8"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Testimonials;
