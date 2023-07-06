import { Fragment } from "react";
import Hero from "@/components/hero";

function Testimonials() {
  const header = {
    subtitle: "Testimonials & Reviews",
    title: "What my clients say about me",
    slogan:
      "I have collaborated with many clients over the years, and here are some of their thoughts about me",
  };
  const testimonials = [
    {
      id: 1,
      name: "Dave Cottlehuber",
      role: "CEO @ SkunkWerks",
      content:
        "I think you did an incredible job of landing on all four feet (like a cat!) in quite unfamiliar terrain, picking up OCI like you used it already, and navigating a lot of incomplete information on FreeBSD as well.",
    },
    {
      id: 2,
      name: "John Gibb",
      role: "Head of Projects @ Survation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget arcu eu ipsum sodales euismod.",
    },
    {
      id: 2,
      name: "Mike Burrows",
      role: "Former CTO @ Survation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget arcu eu ipsum sodales euismod.",
    },
    {
      id: 2,
      name: "Rushaa Hamid",
      role: "Former Special Projects Manager @ Survation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget arcu eu ipsum sodales euismod.",
    },
  ];

  return (
    <Fragment>
      <Hero header={header} />
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Testimonials</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded shadow">
                <p className="text-gray-800 mb-2">{testimonial.content}</p>
                <p className="text-gray-600 font-medium">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Testimonials;
