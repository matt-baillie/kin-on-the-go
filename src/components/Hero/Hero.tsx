import React from "react";
import { HeroStyled } from "./Hero.styled";
import kneeFlexion from "../../assets/kin-lying-knee-flexion.jpg";

interface Props {
  backgroundImage: string;
  title: string;
}
const Hero = ({ backgroundImage, title }: Props) => {
  return (
    <HeroStyled backgroundImage={backgroundImage}>
      <h1>{title}</h1>
    </HeroStyled>
  );
};

export default Hero;
