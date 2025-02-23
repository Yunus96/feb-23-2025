import React from "react";
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-900 text-white px-6 py-4 shadow-lg">
      {/* Left - Logo and Menu */}
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold tracking-wide">HOURS</h1>
        <ul className="flex gap-6 text-sm">
          <li className="cursor-pointer border-b-2 border-teal-400">Dashboard</li>
          <li className="cursor-pointer hover:text-teal-400">Projects</li>
          <li className="cursor-pointer hover:text-teal-400">Team</li>
          <li className="cursor-pointer hover:text-teal-400">Clients</li>
          <li className="cursor-pointer hover:text-teal-400">Time</li>
          <li className="cursor-pointer hover:text-teal-400">Reports</li>
        </ul>
      </div>

      {/* Right - User Profile */}
      <div className="flex items-center gap-3">
        <FaUserCircle className="text-2xl text-gray-400" />
        <span className="text-sm">Mario</span>
      </div>
    </nav>
  );
};

export default NavigationBar;