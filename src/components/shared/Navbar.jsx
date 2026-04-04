import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-black"></div>
          <h2 className="text-lg font-semibold">Floka</h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">Pages</li>
          <li className="hover:text-black cursor-pointer">Portfolio</li>
          <li className="hover:text-black cursor-pointer">Blog</li>
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-5 text-sm">
          <span className="text-gray-500">info@floka.com</span>
          <span className="cursor-pointer">⋮⋮</span>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <HiX size={24} onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <HiMenu size={24} onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-5 pb-4 shadow">
          <ul className="space-y-3 text-gray-700">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Pages</li>
            <li className="cursor-pointer">Portfolio</li>
            <li className="cursor-pointer">Blog</li>
          </ul>

          <div className="mt-4 pt-3 border-t text-sm text-gray-500">
            info@floka.com
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;