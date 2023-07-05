import { Fragment } from "react";
import Hero from "@/components/hero";

function Testimonials() {
    const header = {
        subtitle: "Testimonials & Reviews",
        title: "What my clients say about me",
        slogan: "I have collaborated with many clients over the years, and here are some of their thoughts about me"
    }
    return (
        <Fragment>
            <Hero header={header} />
        </Fragment>
    );
}



export default Testimonials;