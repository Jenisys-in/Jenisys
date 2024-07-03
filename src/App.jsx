import "./App.css";
import React from "react";
import Navbar from "./components/navbar.jsx";
import ScrollToTop from "./ScrolltoTop.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
    </Router>
  );
}

export default App;
