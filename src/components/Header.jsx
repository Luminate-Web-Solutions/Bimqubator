import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';
import { Mail } from 'lucide-react';
import logonavbar from "../assets/LogoNavbar.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-2 bg-white-300 text-gray">
      <Link to="/" className="flex items-center">
        <img src={logonavbar} alt="Logo" className="h-12" />
      </Link>
      <nav>
        <Link to="/" className="px-4 py-2 hover:bg-gray-700 rounded hover:text-white">Home</Link>
        <Link to="/about" className="px-4 py-2 hover:bg-gray-700 rounded hover:text-white">About</Link>
        <Link to="/services" className="px-4 py-2 hover:bg-gray-700 rounded hover:text-white">Services</Link>
      
      </nav>
     <div className="flex items-center">
  <Link to="/contact" className="px-4 py-2">
    <PhoneCall size={20} className="text-blue-500 hover:text-black" />
  </Link>
  <Link to="/contact" className="px-4 py-2">
    <Mail size={20} className="text-blue-500 hover:text-black" />
  </Link>
</div>

    </header>
  )
}

export default Header