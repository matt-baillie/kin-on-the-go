import React from "react";
import { HeroStyled } from "./Hero.styled";
import kneeFlexion from "../../assets/kin-lying-knee-flexion.jpg";
const Hero = () => {
  return <HeroStyled backgroundImage={`url(${kneeFlexion})`}>Hero</HeroStyled>;
};

export default Hero;
