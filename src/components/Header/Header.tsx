import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./Header.styled";
import Logo from "../Logo/Logo";
import Menu from "./Menu/Menu";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo></Logo>
      </Link>

      <Menu />

      <button>Book Now!</button>
    </StyledHeader>
  );
};
