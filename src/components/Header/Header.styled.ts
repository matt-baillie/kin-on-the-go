import styled from "styled-components";
import { device } from "../../globalStyles";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  background-color: #ddd;
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* hide nav @ mobile and instead have a hamburger menu w/a list */

  button {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.75rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
    border: none;
    padding: 0.5rem 1rem;
  }
  @media ${device.mobileL} {
  }
  @media ${device.laptop} {
  }
`;

export const NavLink = styled(Link)``;
