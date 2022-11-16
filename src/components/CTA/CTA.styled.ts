import styled from "styled-components";
import machinePress from "../../assets/shoulder-press-machine.jpg";

export const CTAStyled = styled.section`
  position: relative;
  min-height: 50vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${machinePress});
  background-size: cover;
  background-position: 50% 50%;
  color: #fff;
  /* z-index: -1; */
  h2 {
    z-index: 1;
  }
  p {
    z-index: 1;
  }
  &:after {
    content: "";
    /* z-index: -1; */
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.35);
  }
`;
