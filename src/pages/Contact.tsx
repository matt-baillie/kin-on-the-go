import React from "react";
import Hero from "../components/Hero/Hero";
import olderBreak from "../assets/older-break.jpg";

const Contact = () => {
  return (
    <>
      <Hero backgroundImage={`url(${olderBreak})`} title="Contact Us" />
    </>
  );
};

export default Contact;
