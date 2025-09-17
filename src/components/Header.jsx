import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/80 sticky top-0 z-50 backdrop-blur-lg shadow-sm relative">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className={`${styles.brandLogo} text-2xl font-bold`} onClick={closeMenu}>
            TEFA<span> JTIK</span>
          </a>

          {/* Navigasi Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-base font-normal text-gray hover:text-primary">
              Home
            </a>
            <a href="#about" className="text-base font-normal text-gray hover:text-primary">
              About
            </a>
            <a href="#services" className="text-base font-normal text-gray hover:text-primary">
              Service
            </a>
            <a href="#products" className="text-base font-normal text-gray hover:text-primary">
              Products
            </a>
            <a href="#contact" className="text-base font-normal text-gray hover:text-primary">
              Contact
            </a>
          </nav>

          {/* Get Started Button (Desktop) */}
          <a href="#contact" className="hidden lg:inline-block bg-primary text-white text-base font-semibold px-6 py-2 rounded-full hover:bg-primary-dark">
            Get Started
          </a>

          {/* Toggle Menu Button (Mobile Only) */}
          <button className="lg:hidden text-2xl z-50 ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden absolute top-20 left-0 w-full bg-white shadow-md transition-all duration-500 ease-in-out transform ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
        <nav className="flex flex-col">
          <a href="#home" className="text-lg text-gray-700 py-4 px-4 border-b border-gray-100 hover:bg-gray-50" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" className="text-lg text-gray-700 py-4 px-4 border-b border-gray-100 hover:bg-gray-50" onClick={closeMenu}>
            About
          </a>
          <a href="#services" className="text-lg text-gray-700 py-4 px-4 border-b border-gray-100 hover:bg-gray-50" onClick={closeMenu}>
            Service
          </a>
          <a href="#products" className="text-lg text-gray-700 py-4 px-4 border-b border-gray-100 hover:bg-gray-50" onClick={closeMenu}>
            Products
          </a>
          <a href="#contact" className="text-lg text-gray-700 py-4 px-4 hover:bg-gray-50" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
