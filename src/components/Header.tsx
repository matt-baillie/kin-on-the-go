import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./styles/Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <div>Logo</div>
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
