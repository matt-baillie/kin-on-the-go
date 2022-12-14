import { createGlobalStyle } from "styled-components";

// Media queries
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const GlobalStyle = createGlobalStyle`
    *{
      box-sizing: border-box;
    }
    body {
      overflow-x: hidden;
        margin: 0;
        padding: 0; 
        background-color: teal;
    }
    ul {
    padding-inline-start: 0;
    }
    li {
      list-style-type: none;
    }
`;
export default GlobalStyle;
