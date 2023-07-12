import { Fragment } from "react";
import Hero from "@/components/hero";
import { testimonials } from "@/data/testimonials-data";
import { headers } from "@/data/headers";
import Testimonial from "@/components/testimonial";

function Testimonials() {
  const header = headers.testimonials;

  return (
    <Fragment>
      <Hero header={header} />
      <div className="custom-bg-gray-100 p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="custom-text-black text-3xl font-bold mb-8">Testimonials & Reviews</h1>
          <div className="md:columns-2">
            {testimonials.map((testimonial) => (
              <Testimonial testimonial={testimonial} key={testimonial.id}/>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Testimonials;
