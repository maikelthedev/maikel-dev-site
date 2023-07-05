import { Fragment } from "react";
import Hero from "@/components/hero";

function Testimonials() {
  const header = {
    subtitle: "Testimonials & Reviews",
    title: "What my clients say about me",
    slogan:
      "I have collaborated with many clients over the years, and here are some of their thoughts about me",
  };
  return (
    <Fragment>
      <Hero header={header} />
      <div className="bg-white p-5">
        <h1 className="mx-auto text-center text-2xl">To be completed</h1>
      </div>
    </Fragment>
  );
}

export default Testimonials;
