import React from "react";
import Hero from "../components/Hero/Hero";
import olderBreak from "../assets/older-break.jpg";
import { CTA } from "../components/CTA/CTA";

const Contact = () => {
  return (
    <>
      <Hero backgroundImage={`url(${olderBreak})`} title="Contact Us" />
      <CTA />
    </>
  );
};

export default Contact;
