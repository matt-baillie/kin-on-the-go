import styled from "styled-components";
import { device } from "../../../globalStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";

interface Props {
  displayMenu: boolean;
}
export const MenuStyled = styled.nav<Props>`
  /* position: absolute; */
  /* top: 0; */

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    /* add when in flex row */
    @media ${device.tablet} {
      padding: 0 1rem;
    }
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
  }
  ul {
    position: absolute;
    /* top: 0; */

    /*  */
    display: ${(props) => (props.displayMenu ? "flex" : "none")};
    flex-direction: column;
    padding: 0;
    text-align: center;
    @media ${device.tablet} {
      display: flex;
      flex-direction: row;
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
