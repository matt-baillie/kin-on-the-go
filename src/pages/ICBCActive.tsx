import React from "react";
import Hero from "../components/Hero/Hero";
import pushUp from "../assets/kettlebell-pushup.jpg";
import kneeFlexion from "../assets/kin-lying-knee-flexion.jpg";

const ICBCActive = () => {
  return (
    <>
      <Hero
        backgroundImage={`url(${pushUp})`}
        title="ICBC Active Rehabilitation"
      />
    </>
  );
};

export default ICBCActive;
