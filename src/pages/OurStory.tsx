import React from "react";
import Hero from "../components/Hero/Hero";
import shoulderRaise from "../assets/shoulder-raise.jpg";

const OurStory = () => {
  return (
    <>
      <Hero backgroundImage={`url(${shoulderRaise})`} title="Our Story" />
      <div>Our Story</div>
    </>
  );
};

export default OurStory;
