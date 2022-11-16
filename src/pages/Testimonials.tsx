import React from "react";
import Hero from "../components/Hero/Hero";
import kinArmRaise from "../assets/kin-shoulder-flexion.jpg";
const Testimonials = () => {
  return (
    <>
      <Hero backgroundImage={`url(${kinArmRaise})`} title="Testimonials" />
    </>
  );
};

export default Testimonials;
