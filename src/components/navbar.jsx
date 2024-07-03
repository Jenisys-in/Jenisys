import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

// NavItem Component
const NavItem = ({ children, isActive, to }) => (
  <Link
    to={to}
    className={`justify-center p-2 whitespace-nowrap rounded-full ${
      isActive ? "text-white font-semibold" : "text-white"
    } transition duration-300 ease-in-out hover:bg-white hover:text-black`}
  >
    {children}
  </Link>
);

// Button Component
const Button = ({ children, variant, to }) => (
  <Link
    to={to}
    className={`px-4 py-2 rounded-full font-semibold ${
      variant === "primary"
        ? "bg-white text-black border-zinc-200"
        : "bg-white text-black border-zinc-200"
    } border-2 transition-colors duration-300 hover:bg-yellow-600 hover:border-yellow-600`}
  >
    {children}
  </Link>
);

// Navbar Component
function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Mission", path: "/mission" },
    { name: "Blog", path: "/blog" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="flex flex-direction:row items-center justify-between bg-[#0c0741] text-white p-6 w-full border-b border-solid border-gray-900">
      <div className="flex items-center gap-4 relative">
        <img
          src="/img/ellipse.jpeg"
          alt="Logo"
          className="w-12 h-12 rounded-full"
        />
        <h1 className="text-3xl font-bold tracking-tight text-white">LOGO</h1>
      </div>
      <nav className="flex gap-6">
        <div className="flex gap-4">
          {navItems.map((item, index) => (
            <NavItem key={item.name} to={item.path} isActive={index === 0}>
              {item.name}
            </NavItem>
          ))}
        </div>
        <div className="flex gap-4">
          <Button variant="secondary" to="/login">
            Log In
          </Button>
          <Button variant="primary" to="/signup">
            Sign Up
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
