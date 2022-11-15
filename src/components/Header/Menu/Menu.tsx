import React, { useState } from "react";
import { MenuStyled, HamIcon } from "./Menu.styled";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  return (
    <MenuStyled displayMenu={menuOpen}>
      <HamIcon onClick={() => setMenuOpen((prev) => !prev)} />
      <ul>
        <li>
          <Link to="/our-story">Our Story</Link>
        </li>
        <li>
          <Link to="/active-rehabilitation">Active Rehabilitation</Link>
        </li>
        <li>
          <Link to="/icbc">ICBC Active Rehab</Link>
        </li>
        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
      </ul>
    </MenuStyled>
  );
};

export default Menu;
