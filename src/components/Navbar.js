"use client"; // Ensure this is a Client Component

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Correct hook for path
import "../app/global.css"; // Update the path if needed

// Navbar Component
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  // NavItem Component
  const NavItem = ({ children, href, onClick }) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href} // Use href for Next.js Link component
        onClick={onClick}
        className={`nav-link ${isActive ? "active" : ""}`}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="fixed z-10 top-0 left-0 w-full bg-white transition-color flex items-center justify-between px-6 h-[80px]">
      {/* Logo */}
      <a className="flex gap-2" href="/">
        <img
          src="/img/Logo.png" // Update the path to absolute
          className="md:ml-[50px] md:mb-[8px] md:w-[60px] md:h-[65px] w-[25px] h-[30px]"
        />
        <img
          src="/img/Jenisys Hero.png" // Update the path to absolute
          className="md:mt-[10px] md:-ml-[10px] md:w-[180px] md:h-[50px] mt-[5px] md:mt-0 w-[90px] h-[25px]"
        />
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
        <div className="flex gap-4 3xl:ml-[150px] 3xl:mt-[5px] md:mt-[14px] md:ml-[30px]"></div>
        <div className="3xl:mt-[20px] 3xl:ml-[150px] md:ml-[50px] md:mt-[20px]">
          {navItems.map((item) => (
            <NavItem key={item.name} href={item.path}>
              {item.name}
            </NavItem>
          ))}
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="block md:hidden ml-auto">
        <div
          className={`hamburger ${isMobileMenuOpen ? "open" : "closed"}`}
          onClick={toggleMobileMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white text-black z-50 flex flex-col p-6">
          <div className="flex flex-col gap-6 mt-12">
            {navItems.map((item) => (
              <NavItem
                key={item.name}
                href={item.path}
                onClick={toggleMobileMenu}
              >
                {item.name}
              </NavItem>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
