"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "../app/global.css";

// Navbar Component
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        href={href}
        onClick={onClick}
        className={`nav-link ${isActive ? "active" : ""}`}
      >
        {children}
      </Link>
    );
  };

  return (
    <>
     

      <nav className={`fixed z-10 top-0 left-0 w-full transition-all duration-300 flex items-center justify-between px-6 h-[80px] shadow-sm ${
        isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-white'
      }`}>
        {/* Logo */}
        <Link className="flex gap-2" href="/">
          <Image
            src="/img/Logo.png"
            alt="Logo"
            width={60}
            height={65}
            className="md:ml-[50px] md:mb-[8px] md:w-[60px] md:h-[65px] w-[25px] h-[30px]"
          />
          <Image
            src="/img/Jenisys Hero.png"
            alt="Jenisys Hero"
            width={180}
            height={50}
            className="md:mt-[10px] md:-ml-[10px] md:w-[180px] md:h-[50px] mt-[5px] md:mt-0 w-[90px] h-[25px]"
          />
        </Link>

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
            role="button"
            aria-label="Toggle mobile menu"
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu ${
            isMobileMenuOpen ? "open" : ""
          } md:hidden fixed inset-0 bg-white text-black z-50 flex flex-col p-6`}
        >
          <div className="flex flex-col gap-6 mt-20">
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
      </nav>
    </>
  );
}

export default Navbar;