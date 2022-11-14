import styled from "styled-components";
import { device } from "../../globalStyles";

export const StyledHeader = styled.header`
  background-color: #fbf;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    justify-content: space-between;
    a {
      padding: 0 1rem;
    }
  }

  button {
    color: #8a358a;
    font-size: 1.2rem;
    background-color: #f9a44d;
    border-radius: 10px;
    border: none;
    padding: 1rem 2rem;
  }
  @media ${device.mobileL} {
  }
  @media ${device.laptop} {
  }
`;
