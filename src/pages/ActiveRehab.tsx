import React from "react";
import Hero from "../components/Hero/Hero";
import wallSquat from "../assets/wall-squat.jpg";
import { CTA } from "../components/CTA/CTA";

const ActiveRehab = () => {
  return (
    <>
      <Hero
        backgroundImage={`url(${wallSquat})`}
        title="Active Rehabilitation"
      />

      <CTA />
    </>
  );
};

export default ActiveRehab;
