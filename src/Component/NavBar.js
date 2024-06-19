import React, { useState } from 'react';
import Home from './Home';
import { Link } from 'react-router-dom';

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
    <nav className={`flex items-center  border-solid border-2 border-blue-200 rounded-full ml-10 mr-10 justify-between p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="flex items-center">
        <span className="font-bold text-xl">Himanshu Gupta</span>
      </div>
      <div className="hidden md:flex space-x-4">
      <Link to="/home" className="hover:text-pink-500">Home</Link>
        <Link to="/projects" className="hover:text-pink-500">Projects</Link>
        <Link to="/blog" className="hover:text-pink-500">Blog</Link>
        <Link to="/contact" className="hover:text-pink-500">Contact</Link>
      </div>
      <div className="flex items-center space-x-4">
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input type="checkbox" id="toggle" className="sr-only" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            <div className="block bg-gray-600 w-10 h-6 rounded-full"></div>
            <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${darkMode ? 'transform translate-x-4' : ''}`}></div>
          </div>
          <div className="ml-3 text-gray-700 font-medium hover:text-pink-500">{darkMode ? 'Dark' : 'Light'}</div>
        </label>
        <a href="#contact" className="bg-purple-700 text-white py-2 px-4 rounded-full hover:bg-purple-800">Contact me</a>
      </div>
    </nav>
    </>
  );
}

export default NavBar;
