import React, { useState } from "react";
import { MenuStyled, HamIcon, CloseIcon } from "./Menu.styled";
import { Link } from "react-router-dom";

interface Props {
  displayMenu: boolean;
  setDisplayMenu: (prev: any) => any;
}
const Menu = ({ displayMenu, setDisplayMenu }: Props) => {
  // const [menuOpen, setMenuOpen] = useState(false);
  return (
    <MenuStyled displayMenu={displayMenu}>
      {displayMenu ? (
        <CloseIcon onClick={() => setDisplayMenu(!displayMenu)} />
      ) : (
        <HamIcon onClick={() => setDisplayMenu(!displayMenu)} />
      )}
      <ul>
        <li>
          <Link to="/our-story" onClick={() => setDisplayMenu(false)}>
            Our Story
          </Link>
        </li>
        <li>
          <Link
            to="/active-rehabilitation"
            onClick={() => setDisplayMenu(false)}
          >
            Active Rehabilitation
          </Link>
        </li>
        <li>
          <Link to="/icbc" onClick={() => setDisplayMenu(false)}>
            ICBC Active Rehab
          </Link>
        </li>
        <li>
          <Link to="/testimonials" onClick={() => setDisplayMenu(false)}>
            Testimonials
          </Link>
        </li>
      </ul>
    </MenuStyled>
  );
};

export default Menu;
