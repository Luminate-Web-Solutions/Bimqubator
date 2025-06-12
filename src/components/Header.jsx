import { Link } from 'react-router-dom';
import { PhoneCall, Mail } from 'lucide-react';
import logonavbar from "../assets/LogoNavbar.png";

const Header = () => {
  return (
<header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-sm p-2 flex items-center justify-between">


      <Link to="/" className="flex items-center">
        <img src={logonavbar} alt="Logo" className="h-16" />
      </Link>

      <nav className="flex" aria-label="Main navigation">
        <Link to="/" className="px-4 py-2 hover:bg-gray-800/40 rounded hover:text-white">Home</Link>
        <Link to="/about" className="px-4 py-2 hover:bg-gray-800/40 rounded hover:text-white">About</Link>
        <Link to="/services" className="px-4 py-2 hover:bg-gray-800/40 rounded hover:text-white">Services</Link>
        <Link to="/contact" className="px-4 py-2 hover:bg-gray-800/40 rounded hover:text-white">Contact Us</Link>
      </nav>

      <div className="flex items-center">
        <Link to="/contact" className="px-4 py-2" aria-label="Call us">
          <PhoneCall size={20} className="text-blue-500 hover:text-black" />
        </Link>
        <Link to="/contact" className="px-4 py-2" aria-label="Email us">
          <Mail size={20} className="text-blue-500 hover:text-black" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
