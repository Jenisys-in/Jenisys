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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      <nav
        className={`fixed z-10 top-0 left-0 w-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 lg:px-8 h-[70px] sm:h-[75px] lg:h-[80px] shadow-sm bg-white`}
      >
        {/* Logo */}
        <Link className="flex gap-2 items-center" href="/">
          <Image
            src="/img/Logo.png"
            alt="Logo"
            width={60}
            height={65}
            className="w-[25px] h-[30px] sm:w-[35px] sm:h-[40px] md:w-[45px] md:h-[50px] lg:w-[55px] lg:h-[60px] xl:w-[60px] xl:h-[65px] xl:ml-[50px]"
          />
          <Image
            src="/img/Jenisys Hero.png"
            alt="Jenisys Hero"
            width={180}
            height={50}
            className="w-[90px] h-[25px] sm:w-[110px] sm:h-[30px] md:w-[130px] md:h-[35px] lg:w-[150px] lg:h-[40px] xl:w-[180px] xl:h-[50px] xl:-ml-[10px]"
          />
        </Link>

        {/* Desktop Menu - Hidden on tablets and below */}
        <div className="hidden xl:flex items-center">
          <div className="flex gap-4 3xl:ml-[150px] 3xl:mt-[5px] xl:mt-[14px] xl:ml-[30px]"></div>
          <div className="3xl:mt-[20px] 3xl:ml-[150px] xl:ml-[50px] xl:mt-[20px]">
            {navItems.map((item) => (
              <NavItem key={item.name} href={item.path}>
                {item.name}
              </NavItem>
            ))}
          </div>
        </div>

        {/* Tablet Menu - Visible on tablets only */}
        <div className="hidden md:flex xl:hidden items-center">
          <div className="flex gap-2 lg:gap-3">
            {navItems.map((item) => (
              <NavItem key={item.name} href={item.path}>
                <span className="text-sm lg:text-base whitespace-nowrap">
                  {item.name}
                </span>
              </NavItem>
            ))}
          </div>
        </div>

        {/* Hamburger Icon for Mobile and Small Tablets */}
        <div className="block md:hidden">
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
