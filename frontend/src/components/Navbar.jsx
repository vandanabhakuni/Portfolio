import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Vandana</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Side Panel */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-6 bg-white dark:bg-gray-900 shadow text-base font-medium">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-800 dark:text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-gray-800 dark:text-white"
          >
            About
          </Link>
          <Link
            to="/projects"
            onClick={() => setMenuOpen(false)}
            className="text-gray-800 dark:text-white"
          >
            Projects
          </Link>
          <Link
            to="/skills"
            onClick={() => setMenuOpen(false)}
            className="text-gray-800 dark:text-white"
          >
            Skills
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-gray-800 dark:text-white"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

