import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  const [language, setLanguage] = useState('ENG');

  return (
    <nav className="w-full">

<div className="flex justify-end items-center px-6 md:px-10 h-10 bg-blue-100 text-sm text-blue-700 gap-4 md:gap-8 border-b border-blue-100">
  

  <div className="flex items-center gap-5 cursor-pointer">
        <Link to="/events" className="hover:text-blue-900 transition-colors whitespace-nowrap">Events</Link>
        <Link to="/contact" className="hover:text-blue-900 transition-colors whitespace-nowrap">Contact us</Link>
        <span className="font-medium text-[12px]">🌐</span>
        <select 
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
      className="bg-transparent outline-none cursor-pointer font-medium appearance-none md:appearance-auto"
    >
      <option value="ENG">ENG</option>
      <option value="FRA">FRA</option>
      <option value="ESP">ESP</option>
      <option value="HIN">HIN</option>
    </select>
  </div>
</div>



    </nav>
  );
};

export default TopBar;
