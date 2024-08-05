import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../App.css";

// NavItem Component
const NavItem = ({ children, isActive, to }) => (
  <Link
    to={to}
    className={`hover:underline underline-offset-8 decoration-purple 3xl:ml-[130px] md:ml-[80px]  px-1 text-[20px]  whitespace-nowrap rounded-full font-['Montserrat'] font-semibold 
    transition duration-300 ease-in-out text-black border-white`}
  >
    {children}
  </Link>
);

// Button Component
const Button = ({ children, variant, to }) => (
  <div
    className={` hover:underline underline-offset-8 decoration-purple px-4 py-2 rounded-full font-['Montserrat'] font-semibold text-[20px]  border-0 transition-colors duration-300 relative   duration-300 `}
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
    
    { name: "Services", path: "/services" },
    
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/Blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="fixed w-full z-10 top-0 left-0  flex items-center justify-between   p-6 w-full h-[90px] ">
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
      <nav className="hidden md:flex gap-6  ">
        <a href="/"><img 
        src="../img/Logo.png"
        className="md:w-[33px] md:h-[49px] 3xl:w-[49px] 3xl:h-[59px] 3xl:ml-[100px] md:ml-[50px]"
        /></a>
      <div className="flex gap-4 3xl:ml-[280px] 3xl:mt-[5px] md:ml-[135px]">
          <Button variant="secondary" to="/login" >
            Log In / Sign Up
          </Button>
        </div>
        <div className=" 3xl:mt-[15px]  md:ml-[270px] md:mt-[8px]">
        {navItems.map((item, index) => (
          <NavItem key={item.name} to={item.path} isActive={index === 0}>
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
