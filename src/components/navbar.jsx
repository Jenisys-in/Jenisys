import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../App.css";

// NavItem Component
const NavItem = ({ children, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`nav-link ${isActive ? "active" : ""}`}>
      {children}
    </Link>
  );
};

// Button Component
const Button = ({ children, to }) => (
  <div className="hover:underline underline-offset-8 decoration-purple px-4 py-2 rounded-full font-['Montserrat'] font-semibold text-[20px] border-0 transition-colors duration-300 relative duration-300">
    <Link to={to} className="w-full h-full">
      {children}
    </Link>
  </div>
);

// Navbar Component
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState("bg-white");

  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("white-section")) {
          setNavbarStyle("frosted-glass");
        } else {
          setNavbarStyle("bg-white");
        }
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1,
    });

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const navItems = [
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed z-10 top-0 left-0 min-w-full ${navbarStyle} transition-color flex items-center justify-between px-6 h-[80px]`}
    >
      {/* Desktop Menu */}
      <a className="flex gap-2" href="/">
        <img
          src="../img/Logo.png"
          className="md:ml-[50px] md:mb-[8px] md:w-[60px] md:h-[65px] w-[25px] h-[30px]"
        />
        <img
          src="../img/Jenisys Hero.png"
          className="md:mt-[10px] md:-ml-[10px] md:w-[180px] md:h-[50px] mt-[5px] md:mt-0 w-[90px] h-[25px]"
        />
      </a>

      <div className="hidden md:flex items-center">
        <div className="flex gap-4 3xl:ml-[150px] 3xl:mt-[5px] md:mt-[14px] md:ml-[30px]">
          {/* <Button variant="secondary" to="/login">
            Log In / Sign Up
          </Button> */}
        </div>
        <div className="3xl:mt-[20px] 3xl:ml-[150px] md:ml-[50px] md:mt-[20px]">
          {navItems.map((item) => (
            <NavItem key={item.name} to={item.path}>
              {item.name}
            </NavItem>
          ))}
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="block md:hidden ml-auto">
        
        {!isMobileMenuOpen ? (
          <button
            onClick={toggleMobileMenu}
            className="text-black focus:outline-none"
          >
            <AiOutlineMenu className="text-4xl" />
          </button>
        ) : (
          <button
            onClick={closeMobileMenu}
            className="text-black focus:outline-none"
          >
            <AiOutlineClose className="text-4xl" />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#5851AD] text-white z-50">
          <div className="p-6">
            <button
              onClick={closeMobileMenu}
              className="text-white absolute top-4 right-4 focus:outline-none"
            >
              <AiOutlineClose className="text-2xl" />
            </button>
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavItem key={item.name} to={item.path}>
                  {item.name}
                </NavItem>
              ))}
              <div className="flex flex-col gap-4">
                {/* <Button variant="secondary" to="/login">
                  Log In
                </Button>
                <Button variant="primary" to="/signup">
                  Sign Up
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
