import React from "react";
import Hero from "../components/Hero/Hero";
import shoulderRaise from "../assets/shoulder-raise.jpg";
import { CTA } from "../components/CTA/CTA";

const OurStory = () => {
  return (
    <>
      <Hero backgroundImage={`url(${shoulderRaise})`} title="Our Story" />
      <div>Our Story</div>
      <CTA />
    </>
  );
};

export default OurStory;
