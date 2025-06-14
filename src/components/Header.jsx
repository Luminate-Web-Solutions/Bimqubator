import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, Mail, Menu, X } from "lucide-react";
import logonavbar from "../assets/LogoNavbar.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm px-4 py-2">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logonavbar} alt="Logo" className="h-12 sm:h-16" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-3" aria-label="Main navigation">
          <Link to="/" className="px-3 py-2 hover:bg-gray-800/40 rounded font-bold hover:text-white">
            Home
          </Link>
          <Link to="/about" className="px-3 py-2 hover:bg-gray-800/40 rounded font-bold hover:text-white">
            About
          </Link>
          <Link to="/services" className="px-3 py-2 hover:bg-gray-800/40 rounded font-bold hover:text-white">
            Services
          </Link>
          <Link to="/contact" className="px-3 py-2 hover:bg-gray-800/40 rounded font-bold hover:text-white">
            Contact Us
          </Link>
        </nav>

        {/* Contact Icons */}
        <div className="hidden md:flex items-center gap-2">
          <Link to="/contact" aria-label="Call us">
            <PhoneCall size={20} className="text-blue-800 hover:text-black" />
          </Link>
          <Link to="/contact" aria-label="Email us">
            <Mail size={20} className="text-blue-800 hover:text-black" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-white rounded shadow-md p-4 space-y-3">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block font-semibold text-gray-700">
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block font-semibold text-gray-700">
            About
          </Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="block font-semibold text-gray-700">
            Services
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block font-semibold text-gray-700">
            Contact Us
          </Link>

          <div className="flex gap-4 pt-2">
            <PhoneCall size={20} className="text-blue-800 hover:text-black" />
            <Mail size={20} className="text-blue-800 hover:text-black" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
