import React from "react";
import Hero from "../components/Hero/Hero";
import kneeFlexion from "../assets/kin-lying-knee-flexion.jpg";
import { CTA } from "../components/CTA/CTA";
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
      <CTA />
    </>
  );
};

export default Home;
