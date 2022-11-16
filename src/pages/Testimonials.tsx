import React from "react";
import Hero from "../components/Hero/Hero";
import kinArmRaise from "../assets/kin-shoulder-flexion.jpg";
import { CTA } from "../components/CTA/CTA";

const Testimonials = () => {
  return (
    <>
      <Hero backgroundImage={`url(${kinArmRaise})`} title="Testimonials" />
      <CTA />
    </>
  );
};

export default Testimonials;
