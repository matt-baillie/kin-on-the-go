import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <header>
      <div>Logo</div>
      <div>
        <Link to="/our-story">Our Story</Link>
        <Link to="/active-rehabilitation">Active Rehabilitation</Link>
        <Link to="/icbc">ICBC Active Rehab</Link>
        <Link to="/testimonials">Testimonials</Link>
      </div>
      <div></div>
    </header>
  );
};
