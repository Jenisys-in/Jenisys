"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

// Navbar Component
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const pathname = usePathname();

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close any open dropdowns when toggling mobile menu
    setActiveDropdown(null);
  }, [isMobileMenuOpen]);

  const clearHoverTimeout = useCallback(() => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  }, [hoverTimeout]);

  // Handle scroll effect with throttling for better performance
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          setIsScrolled(scrollTop > 10); // Small threshold to prevent flickering
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside or pressing escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only handle outside clicks for desktop
      if (window.innerWidth >= 1024) {
        const navbar = document.querySelector("nav");
        if (navbar && !navbar.contains(event.target)) {
          setActiveDropdown(null);
          clearHoverTimeout();
        }
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
        clearHoverTimeout();
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      clearHoverTimeout();
    };
  }, [clearHoverTimeout]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const services = [
    { name: "Web Development", path: "/services/web-development" },
    { name: "Mobile App Development", path: "/services/mobile-development" },
    { name: "Cloud Solutions", path: "/services/cloud-solutions" },
    { name: "AI & Machine Learning", path: "/services/ai-ml" },
    {
      name: "Custom Software Development",
      path: "/services/Custom-Software-Development",
    },
    { name: "IT consulting", path: "/services/IT-consulting" },
    { name: "Maintenance & Support", path: "/services/Maintenance" },
  ];

  const aboutItems = [
    { name: "Learn About Us", path: "/about" },
    { name: "Industries We Serve", path: "/industries" },
  ];

  const navItems = [
    { name: "Case Studies", path: "/case-study" },
    {
      name: "Services",
      path: "/services",
      hasDropdown: true,
      dropdownItems: services,
    },
    {
      name: "About Us",
      path: "/about",
      hasDropdown: true,
      dropdownItems: aboutItems,
    },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  // NavItem Component
  const NavItem = ({ item, isMobile = false, onClick }) => {
    const isActive =
      pathname === item.path ||
      (item.dropdownItems &&
        item.dropdownItems.some((dropItem) => pathname === dropItem.path));

    const handleMouseEnter = useCallback(
      (e) => {
        if (!isMobile && item.hasDropdown) {
          e.stopPropagation();
          clearHoverTimeout();
          setActiveDropdown(item.name);
        }
      },
      [isMobile, item.hasDropdown, item.name]
    );

    const handleMouseLeave = useCallback(() => {
      if (!isMobile && item.hasDropdown) {
        const timeout = setTimeout(() => {
          setActiveDropdown(null);
        }, 150); // Reduced delay for smoother experience
        setHoverTimeout(timeout);
      }
    }, [isMobile, item.hasDropdown]);

    const handleDropdownToggle = useCallback(
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        setActiveDropdown((prev) => (prev === item.name ? null : item.name));
      },
      [item.name]
    );

    const handleNavClick = useCallback(() => {
      if (!item.hasDropdown && onClick) {
        onClick();
      }
    }, [item.hasDropdown, onClick]);

    const handleDropdownItemClick = useCallback(() => {
      setActiveDropdown(null);
      if (isMobile) {
        setIsMobileMenuOpen(false);
      }
    }, [isMobile]);

    const isDropdownOpen = activeDropdown === item.name;

    return (
      <div
        className={`relative ${isMobile ? "w-full" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {item.hasDropdown ? (
          // Dropdown trigger button
          <button
            onClick={handleDropdownToggle}
            className={`
              flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200 w-full
              ${isMobile ? "text-lg justify-between" : "text-base"}
              ${
                isActive
                  ? "text-blue-600 bg-blue-50 font-medium"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }
              relative group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            `}
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            <span>{item.name}</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
            {/* Active indicator line */}
            {!isMobile && isActive && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-full" />
            )}
          </button>
        ) : (
          // Regular navigation link
          <Link
            href={item.path}
            onClick={handleNavClick}
            className={`
              flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200
              ${isMobile ? "text-lg w-full justify-between" : "text-base"}
              ${
                isActive
                  ? "text-blue-600 bg-blue-50 font-medium"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }
              relative group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            `}
          >
            <span>{item.name}</span>
            {/* Active indicator line */}
            {!isMobile && isActive && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-full" />
            )}
          </Link>
        )}

        {/* Dropdown Menu */}
        {item.hasDropdown && (
          <div
            className={`
            ${
              isMobile
                ? `overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 ${
                    isDropdownOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`
                : `absolute top-full left-0 mt-2 min-w-64 bg-white rounded-xl shadow-lg border border-gray-100 z-50 transform transition-all duration-200 ease-out ${
                    isDropdownOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-2 invisible pointer-events-none"
                  }`
            }
          `}
            onMouseEnter={() => {
              if (!isMobile) {
                clearHoverTimeout();
                setActiveDropdown(item.name);
              }
            }}
            onMouseLeave={() => {
              if (!isMobile) {
                const timeout = setTimeout(() => {
                  setActiveDropdown(null);
                }, 150);
                setHoverTimeout(timeout);
              }
            }}
          >
            <div className={`${isMobile ? "pl-6 py-2" : "py-3"}`}>
              {item.dropdownItems.map((dropdownItem, index) => (
                <Link
                  key={dropdownItem.name}
                  href={dropdownItem.path}
                  onClick={handleDropdownItemClick}
                  className={`
                    block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 
                    transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                    ${isMobile ? "text-base" : "text-sm"}
                    ${!isMobile && index === 0 ? "rounded-t-lg" : ""}
                    ${
                      !isMobile && index === item.dropdownItems.length - 1
                        ? "rounded-b-lg"
                        : ""
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {dropdownItem.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <nav
        className={`
        fixed z-50 top-0 left-0 w-full transition-all duration-300 ease-out
        ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white shadow-sm"
        }
      `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              className="flex gap-2 items-center hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg"
              href="/"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
                <Image
                  src="/img/logo2.svg"
                  alt="Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 font-montserrat">
                JENISYS
              </h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-3 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X size={28} className="text-gray-700" />
              ) : (
                <Menu size={28} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
        lg:hidden fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
      `}
        style={{ backgroundColor: "#ffffff" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu"
      >
        <div className="pt-20 pb-6 px-6 overflow-y-auto max-h-screen">
          <div className="flex flex-col space-y-2" id="mobile-menu">
            {navItems.map((item) => (
              <NavItem
                key={item.name}
                item={item}
                isMobile={true}
                onClick={() => {
                  if (!item.hasDropdown) {
                    toggleMobileMenu();
                  }
                }}
              />
            ))}
          </div>

          {/* Mobile CTA Button */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link
              href="/contact"
              onClick={toggleMobileMenu}
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-30 transition-opacity duration-300"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16 lg:h-20" />
    </>
  );
}

export default Navbar;
