import React from "react";
import Hero from "../components/Hero/Hero";
import wallSquat from "../assets/wall-squat.jpg";

const ActiveRehab = () => {
  return (
    <>
      <Hero
        backgroundImage={`url(${wallSquat})`}
        title="Active Rehabilitation"
      />
    </>
  );
};

export default ActiveRehab;
