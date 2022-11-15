import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import ActiveRehab from "./pages/ActiveRehab";
import Contact from "./pages/Contact";
import OurStory from "./pages/OurStory";
import ICBCActive from "./pages/ICBCActive";
import Testimonials from "./pages/Testimonials";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#8A358A",
    secondary: "#FFAC53",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/active-rehabilitation" element={<ActiveRehab />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/icbc" element={<ICBCActive />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
