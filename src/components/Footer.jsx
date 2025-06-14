import React from 'react';
import logo from '../assets/Logo1.png';
import { Mail, Phone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <img src={logo} alt="Logo" className="h-23 mr-2" />
          <p className="text-xs p-2">
            Your trusted partner in delivering MEP 3D Designing, BIM, Architecture, and Structural Design services.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <div className="flex items-center gap-2 mb-2 text-sm">
            <Phone className="w-4 h-4 text-blue-500" />
            +91 900-066-3628
          </div>
          <div className="flex items-center gap-2 mb-2 text-sm">
            <Mail className="w-4 h-4 text-blue-500" />
            <a href="mailto:info@bimqubator.com" className="underline">
              info@bimqubator.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Globe className="w-4 h-4 text-blue-500" />
            <a
              href="https://bimqubator.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              www.bimqubator.com
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <p className="text-sm mb-1">
            <Link to="/" className="hover:underline">Home</Link>
          </p>
          <p className="text-sm mb-1">
            <Link to="/about" className="hover:underline">About</Link>
          </p>
          <p className="text-sm mb-1">
            <Link to="/services" className="hover:underline">Services</Link>
          </p>
          <p className="text-sm">
            <Link to="/contact" className="hover:underline">Contact</Link>
          </p>
        </div>

        {/* Industries Served */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Industries We Serve</h3>
          <p className="text-sm mb-1">Commercial</p>
          <p className="text-sm mb-1">Healthcare</p>
          <p className="text-sm mb-1">Residential</p>
          <p className="text-sm mb-1">Industrial</p>
          <p className="text-sm mb-1">Retail</p>
          <p className="text-sm">Institutions</p>
        </div>

      </div>

      {/* Footer Bottom Text */}
      <div className="mt-8 border-t border-gray-300 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Bimqubator. All rights reserved.
        created by{' '}
        <a href="https://luminatewebsol.com/" className="underline">
          Luminate Web Solutions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
