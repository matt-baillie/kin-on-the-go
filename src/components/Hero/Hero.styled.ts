import styled from "styled-components";
import kneeFlexion from "../../assets/kin-lying-knee-flexion.jpg";

interface Props {
  backgroundImage: string;
}
export const HeroStyled = styled.section<Props>`
  min-height: 80vh;
  width: 100%;
  /* background-image: url(${kneeFlexion}); */
  background-size: cover;
  /* background-image: url(${require("../../assets/kin-lying-knee-flexion.jpg")}); */
  background-image: ${(Props) => Props.backgroundImage};
`;
