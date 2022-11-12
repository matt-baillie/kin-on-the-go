import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import ActiveRehab from "./pages/ActiveRehab";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/active-rehabilitation" element={<ActiveRehab />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
