import React from "react";
import { LogoStyled } from "./Logo.styled";
import LogoSrc from "../../assets/KOTG-logo-v2.png";

const Logo = (props: any) => {
  return <LogoStyled src={LogoSrc} />;
};

export default Logo;
