import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai'

import "../App.css";

// NavItem Component
const NavItem = ({ children, isActive, to }) => (
  <Link
    to={to}
    className={`justify-center  px-1 py-2 whitespace-nowrap rounded-full ${
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
    } border-2 transition-colors duration-300 hover:bg-yellow-600  hover:border-yellow-600 `}
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
      <div className="-mt-[35px] flex items-center gap-4 relative">
        <img
          src="/img/ellipse.jpeg"
          alt="Logo"
          className="-ml-[40px] -mt-[10px] w-14 h-14 rounded-full"
        />
        <h1 className="text-3xl font-bold tracking-tight text-white">LOGO</h1>
        <form className="justify-center w-[400px] h-[20px] pl-[30px] py-pb-[20px] relative">
          <div className="relative">
            <input type="search" placeholder="Search" className="text-black font-semibold w-full p-4 rounded-full white" />
            <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-[#0c0741] duration-300 hover:bg-yellow-600 rounded-full'>
                <AiOutlineSearch />
            </button>
          </div>
            </form>

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
