import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./Header.styled";
import Logo from "../Logo/Logo";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo></Logo>
      </Link>
      <nav>
        <Link to="/our-story">Our Story</Link>
        <Link to="/active-rehabilitation">Active Rehabilitation</Link>
        <Link to="/icbc">ICBC Active Rehab</Link>
        <Link to="/testimonials">Testimonials</Link>
      </nav>
      <button>Book Now!</button>
    </StyledHeader>
  );
};
