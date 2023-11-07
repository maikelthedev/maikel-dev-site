import { Fragment } from "react";
import Hero from "@/components/hero";
import { testimonials } from "@/data/testimonials-data";
import { headers } from "@/data/headers";
import Testimonial from "@/components/testimonial";
import Link from "next/link";
function Testimonials() {
  const header = headers.testimonials;
  return (
    <Fragment>
      <Hero header={header} />
      <div className="custom-white-background p-8">
        <div className="max-w-5xl mx-auto">
          
            
          <Link href="#reviews" id="reviews">
            <h1
              className="custom-white-background custom-text-indigo-900 border-2 border-dashed border-indigo-700 text-center text-4xl 
        font-bold mt-10 mx-auto max-w-xl p-5 rounded-lg
         hover:bg-indigo-700 hover:text-white duration-200 mb-10
        "
            >
              Testimonials & Reviews
            </h1>
          </Link>
          <div className="md:columns-2">
            {testimonials.map((testimonial) => (
              <Testimonial testimonial={testimonial} key={testimonial.name} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Testimonials;
