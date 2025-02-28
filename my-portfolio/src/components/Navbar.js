import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 p-4 z-10 shadow-md">
      <ul className="flex justify-center space-x-8">
        <li><a href="#hero" className="hover:text-teal-400">Home</a></li>
        <li><a href="#about" className="hover:text-teal-400">About</a></li>
        <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
        <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
        <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;