import React, { useState, useEffect } from "react"; // Add useEffect import
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
  <div className="button">
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
      className={`fixed w-full z-10 top-0 left-0 max-w-screen ${navbarStyle} transition-color flex items-center justify-between px-6 h-[90px]`}
    >
      {/* Hamburger Icon for Mobile */}
      <div className="block md:hidden ">
        {!isMobileMenuOpen ? (
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <AiOutlineMenu className="text-4xl" />
          </button>
        ) : (
          <button
            onClick={closeMobileMenu}
            className="text-white focus:outline-none"
          >
            <AiOutlineClose className="text-4xl" />
          </button>
        )}
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6">
        <a className="flex" href="/">
          <img
            src="../img/Logo.png"
            className="ml-[50px] mb-[8px] w-[60px] h-[65px]"
          />
          <img
            src="../img/Jenisys Hero.png"
            className="mt-[10px] -ml-[10px] w-[180px] h-[50px]"
          />
        </a>

        <div className="flex gap-4 3xl:ml-[150px] 3xl:mt-[5px] md:mt-[14px] md:ml-[30px]">
          <Button to="/login">Log In / Sign Up</Button>
        </div>
        <div className="3xl:mt-[20px] 3xl:ml-[150px] md:ml-[50px] md:mt-[20px]">
          {navItems.map((item) => (
            <NavItem key={item.name} to={item.path}>
              {item.name}
            </NavItem>
          ))}
        </div>
      </nav>

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
                <Button to="/login">Log In</Button>
                <Button to="/signup">Sign Up</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
