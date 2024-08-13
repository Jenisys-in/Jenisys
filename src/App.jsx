import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar.jsx";
import Home from "./components/Homepage.jsx";
import LogIn from "./components/Login.jsx";
import ScrollToTop from "./ScrolltoTop.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog.jsx";
import SignUp from "./components/signup.jsx";
import NewBlog from "./components/new-blog.jsx";
import Contact from "./components/contact.jsx";
import Preloader from "./components/preloader.jsx";
import AboutUs from "./components/about-us.jsx";
import Services from "./components/services.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

  useEffect(() => {
    // Set a timer to hide the preloader after 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 5000 milliseconds = 5 seconds

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Hide the preloader with a slight delay to allow the fade-out transition
      const timeout = setTimeout(() => setIsPreloaderVisible(false), 1000); // 1000 milliseconds = 1 second
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  return (
    <>
      {isPreloaderVisible && <Preloader isVisible={isLoading} />}
      <div
        className={`transition-opacity duration-1000 ${
          isPreloaderVisible ? "opacity-0" : "opacity-100"
        }`}
      >
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/newblog" element={<NewBlog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />

          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
