import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./Header.styled";
import Logo from "../Logo/Logo";
import Menu from "./Menu/Menu";

export const Header = () => {
  // Commented out menuOpen and setMenuOpen should be passed down to Menu
  // From Menu menuOpen > to MenuStyled
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <StyledHeader>
      <Link to="/" onClick={() => setMenuOpen(!menuOpen)}>
        <Logo></Logo>
      </Link>

      <Menu displayMenu={menuOpen} setDisplayMenu={setMenuOpen} />

      <button onClick={() => setMenuOpen(!menuOpen)}>Book Now!</button>
    </StyledHeader>
  );
};
