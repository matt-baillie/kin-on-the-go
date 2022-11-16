import styled from "styled-components";
import { device } from "../../../globalStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import React from "react";

interface Props {
  displayMenu: boolean;
}
export const MenuStyled = styled.nav<Props>`
  /* position: relative; */

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
    }

    @media ${device.tablet} {
      padding: 0 0.5rem;
    }
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
  }
  ul {
    opacity: ${(props) => (props.displayMenu ? 1 : 0)};
    transition: opacity 1s, left 1s;
    /* transform: scaleY(${(props) => (props.displayMenu ? 1 : 0)}); */

    position: absolute;

    left: ${(props) => (props.displayMenu ? 0 : "-100%")};
    top: 4rem;
    width: 100%;
    background-color: #ddd;
    flex-direction: column;
    padding: 0;
    text-align: center;
    padding: 1rem 0;
    box-shadow: 0px 50px 50px 0px rgba(0, 0, 0, 0.25);
    margin: 0;

    @media ${device.tablet} {
      display: flex;
      flex-direction: row;
      position: static;
      opacity: 1;
      box-shadow: none;
    }
  }
  li {
    padding: 0.25rem 0;
    list-style: none;
  }
`;
export const HamIcon = styled(GiHamburgerMenu)`
  @media ${device.tablet} {
    display: none;
  }
`;
export const CloseIcon = styled(GrClose)`
  @media ${device.tablet} {
    display: none;
  }
`;
