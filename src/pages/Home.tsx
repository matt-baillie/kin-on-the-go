import React from "react";
import Hero from "../components/Hero/Hero";
import kneeFlexion from "../assets/kin-lying-knee-flexion.jpg";
// `url(${kneeFlexion})`
const Home = () => {
  return (
    <>
      <Hero
        backgroundImage={`url(${kneeFlexion})`}
        title="Mobile Kinesiology Services"
      />
      <section>Here to help</section>
      <section>Guarentee</section>
      <section>About KOTG</section>
      <section>What is Active Rehabilitation</section>
      <section>What is a Kinesiologist</section>
      <section>Pricing</section>
      <section>Steps</section>
      <section>Why KOTG?</section>
      <section>CTA</section>
    </>
  );
};

export default Home;
