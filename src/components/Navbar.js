"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "../app/global.css";

// Navbar Component
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* Enhanced Styles */}
      <style jsx>{`
        .navbar {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid transparent;
        }

        .navbar.scrolled {
          background-color: rgba(255, 255, 255, 0.85);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .navbar.not-scrolled {
          background-color: rgba(255, 255, 255, 1);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          width: 30px;
          height: 24px;
          justify-content: space-between;
          align-items: center;
          padding: 4px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 4px;
        }

        .hamburger:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }

        .hamburger .line {
          width: 100%;
          height: 3px;
          background-color: #333;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
          border-radius: 2px;
        }

        .hamburger.open .line:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .hamburger.open .line:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }

        .hamburger.open .line:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        .hamburger.closed .line:nth-child(1) {
          transform: rotate(0deg) translate(0px, 0px);
        }

        .hamburger.closed .line:nth-child(2) {
          opacity: 1;
          transform: scaleX(1);
        }

        .hamburger.closed .line:nth-child(3) {
          transform: rotate(0deg) translate(0px, 0px);
        }

        /* Enhanced mobile menu animation */
        .mobile-menu {
          transform: translateX(-100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          background-color: rgba(255, 255, 255, 0.95);
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-menu-overlay {
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background-color: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }

        .mobile-menu-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        /* Logo animation */
        .logo-container {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .logo-container:hover {
          transform: scale(1.02);
        }

        /* Nav items styling */
        .nav-items-container {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          position: relative;
          color: #333;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 0.95rem;
        }

        .nav-link:hover {
          background-color: rgba(0, 0, 0, 0.05);
          transform: translateY(-1px);
        }

        .nav-link.active {
          background-color: rgba(0, 0, 0, 0.08);
          font-weight: 600;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 2px;
          background-color: #333;
          border-radius: 1px;
        }

        /* Mobile nav items */
        .mobile-nav-link {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 1.1rem;
          display: block;
          margin: 0.5rem 0;
        }

        .mobile-nav-link:hover {
          background-color: rgba(0, 0, 0, 0.05);
          transform: translateX(8px);
        }

        .mobile-nav-link.active {
          background-color: rgba(0, 0, 0, 0.08);
          font-weight: 600;
        }

        /* Smooth scrolling for the page */
        html {
          scroll-behavior: smooth;
        }

        /* Animation for mobile menu items */
        .mobile-menu-item {
          opacity: 0;
          transform: translateX(-20px);
          animation: slideInFromLeft 0.3s ease-out forwards;
        }

        .mobile-menu-item:nth-child(1) { animation-delay: 0.1s; }
        .mobile-menu-item:nth-child(2) { animation-delay: 0.2s; }
        .mobile-menu-item:nth-child(3) { animation-delay: 0.3s; }
        .mobile-menu-item:nth-child(4) { animation-delay: 0.4s; }
        .mobile-menu-item:nth-child(5) { animation-delay: 0.5s; }

        @keyframes slideInFromLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      <nav className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'} fixed z-50 top-0 left-0 w-full flex items-center justify-between px-6 h-[80px]`}>
        {/* Logo */}
        <Link className="logo-container flex gap-2" href="/">
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
          <div className="nav-items-container 3xl:ml-[150px] md:ml-[50px]">
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

        {/* Mobile Menu Overlay */}
        <div
          className={`mobile-menu-overlay ${
            isMobileMenuOpen ? "open" : ""
          } md:hidden fixed inset-0 z-40`}
          onClick={toggleMobileMenu}
        />

        {/* Mobile Menu */}
        <div
          className={`mobile-menu ${
            isMobileMenuOpen ? "open" : ""
          } md:hidden fixed top-0 left-0 w-4/5 h-full z-50 flex flex-col p-6`}
        >
          <div className="flex flex-col gap-2 mt-20">
            {navItems.map((item, index) => (
              <div key={item.name} className="mobile-menu-item">
                <Link
                  href={item.path}
                  onClick={toggleMobileMenu}
                  className={`mobile-nav-link ${pathname === item.path ? "active" : ""}`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;