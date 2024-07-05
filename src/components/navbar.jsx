import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../App.css";

// NavItem Component
const NavItem = ({ children, isActive, to }) => (
  <Link
    to={to}
    className={`px-1 py-2 whitespace-nowrap rounded-full ${
      isActive ? "text-white font-semibold" : "text-white"
    } transition duration-300 ease-in-out hover:bg-white hover:text-black active:border-white duration-300 active:text-white`}
  >
    {children}
  </Link>
);

// Button Component
const Button = ({ children, variant, to }) => (
  <div
    className={`px-4 py-2 rounded-full font-semibold ${
      variant === "primary"
        ? "bg-white text-black border-zinc-200"
        : "bg-white text-black border-zinc-200"
    } border-2 transition-colors duration-300 relative hover:bg-[#64b5f6] active:border-white duration-300 active:text-white`}
  >
    <Link to={to} className="w-full h-full">
      {children}
    </Link>
  </div>
);

// Navbar Component
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Mission", path: "/mission" },
    { name: "Blog", path: "/blog" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="flex items-center justify-between bg-[#0c0741] text-white p-6 w-full h-[90px] border-b border-solid border-[#0c0741]">
      <div className="-mt-[34px] flex items-center">
        <img
          src="/img/ellipse.jpeg"
          alt="Logo"
          className="-ml-[40px] -mt-[10px] w-14 h-14 rounded-full"
        />
        <h1 className="mt-[30px] text-3xl font-bold tracking-tight">LOGO</h1>
      </div>
      {/* Hamburger Icon for Mobile */}
      <div className="block md:hidden">
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
      {/* Search Input */}
      <div className="hidden md:block w-[400px] relative">
        <input
          type="search"
          placeholder="Search"
          className="text-black font-semibold w-full p-4 rounded-full white"
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-[#0c0741] duration-300 hover:bg-[#64b5f6] rounded-full">
          <AiOutlineSearch />
        </button>
      </div>
      {/* Mobile Search Input */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full mt-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="text-black font-semibold w-full p-4 rounded-full white"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-[#0c0741] duration-300 hover:bg-[#64b5f6] rounded-full">
              <AiOutlineSearch />
            </button>
          </div>
        </div>
      )}
      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6">
        {navItems.map((item, index) => (
          <NavItem key={item.name} to={item.path} isActive={index === 0}>
            {item.name}
          </NavItem>
        ))}
        <div className="flex gap-4">
          <Button variant="secondary" to="/login">
            Log In
          </Button>
          <Button variant="primary" to="/signup">
            Sign Up
          </Button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#0c0741] text-white z-50">
          <div className="p-6">
            <button
              onClick={closeMobileMenu}
              className="text-white absolute top-4 right-4 focus:outline-none"
            >
              <AiOutlineClose className="text-2xl" />
            </button>
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <NavItem key={item.name} to={item.path} isActive={index === 0}>
                  {item.name}
                </NavItem>
              ))}
              <div className="flex flex-col gap-4">
                <Button variant="secondary" to="/login">
                  Log In
                </Button>
                <Button variant="primary" to="/signup">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
