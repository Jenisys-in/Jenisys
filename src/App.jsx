import "./App.css";
import React from "react";
import Navbar from "./components/navbar.jsx";
import Home from "./components/Homepage.jsx";
import LogIn from "./components/Login.jsx";
import ScrollToTop from "./ScrolltoTop.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/Blog" element={<Blog />} />
=======
        <Route path="/login" element={<LogIn />} />
>>>>>>> 6d3487c02dd776a1414f99b7c9a21b0c076a2908
      </Routes>
    </Router>
  );
}

export default App;
