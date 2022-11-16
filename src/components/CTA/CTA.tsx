import React from "react";
import { CTAStyled } from "./CTA.styled";
import Button from "../Button/Button";

export const CTA = () => {
  return (
    <CTAStyled>
      <h2>Tell Us How We Can Help</h2>
      <p>
        Stop holding yourself back from recovery and book your appointment
        today! Feel the benefits of active rehabilitation for yourself and
        return to the life you used to know.
      </p>
      <Button text="Book Your Free Consultation" />
    </CTAStyled>
  );
};
