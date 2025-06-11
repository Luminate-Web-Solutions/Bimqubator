import React from 'react';
import logo from '../assets/Logo1.png'; // Adjust the path as necessary
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
          <p className="text-sm mb-1">📞 +91 900-066-3628</p>
          <p className="text-sm mb-1">📧 info@bimqubator.com</p>
          <p className="text-sm">🌐 www.bimqubator.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <p className="text-sm mb-1"><a href="/" className="hover:underline">Home</a></p>
          <p className="text-sm mb-1"><a href="/about" className="hover:underline">About</a></p>
          <p className="text-sm mb-1"><a href="/services" className="hover:underline">Services</a></p>
          <p className="text-sm"><a href="/contact" className="hover:underline">Contact</a></p>
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
      </div>
    </footer>
  );
};

export default Footer;
