import "./App.css";
import React from "react";
import Navbar from "./components/navbar.jsx";
import Home from "./components/Homepage.jsx";
import ScrollToTop from "./ScrolltoTop.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </Router>
  );
}

export default App;
