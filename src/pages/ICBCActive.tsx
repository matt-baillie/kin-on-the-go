import React from "react";
import Hero from "../components/Hero/Hero";
import pushUp from "../assets/kettlebell-pushup.jpg";

import { CTA } from "../components/CTA/CTA";

const ICBCActive = () => {
  return (
    <>
      <Hero
        backgroundImage={`url(${pushUp})`}
        title="ICBC Active Rehabilitation"
      />
      <CTA />
    </>
  );
};

export default ICBCActive;
