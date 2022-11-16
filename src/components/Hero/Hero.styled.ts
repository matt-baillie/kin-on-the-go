import styled from "styled-components";
import { device } from "../../globalStyles";

interface Props {
  backgroundImage: string;
}
export const HeroStyled = styled.section<Props>`
  position: relative;
  z-index: -1;
  min-height: 60vh;
  width: 100%;
  padding: 1rem;
  background-size: cover;
  background-position: 50% 50%;
  background-image: ${(Props) => Props.backgroundImage};
  display: flex;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2rem;
    z-index: 1;
    @media ${device.tablet} {
    }
  }
  @media ${device.tablet} {
    min-height: 60vh;
  }
  &:before {
    /* z-index: 1; */
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(225, 225, 225, 0.4);
  }
`;
