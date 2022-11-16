import React from "react";
import { ButtonStyled } from "./Button.styled";

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return <ButtonStyled>{text}</ButtonStyled>;
};

export default Button;
