import styled from "styled-components";
import { device } from "../../globalStyles";

interface Props {
  backgroundImage: string;
}
export const HeroStyled = styled.section<Props>`
  min-height: 60vh;
  width: 100%;
  padding: 0.5rem;
  background-size: cover;
  background-position: 50% 50%;
  background-image: ${(Props) => Props.backgroundImage};
  display: flex;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media ${device.tablet} {
    min-height: 60vh;
  }
`;
