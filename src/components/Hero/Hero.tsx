import React from "react";
import { HeroStyled } from "./Hero.styled";

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
