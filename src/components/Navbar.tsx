import React from "react";
import { FaUsers } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdLocalPostOffice } from "react-icons/md";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <header className="w-full flex justify-center items-center gap-x-8 py-4 px-2 bg-purple-300">
      <Link to='/'><button className="py-1.5 px-4 bg-purple-700 text-white rounded-lg  font-semibold transition-all duration-300 hover:bg-purple-900 flex justify-center items-center gap-2"><IoHome /> Home</button></Link>
      <Link to='/users'><button className="py-1.5 px-4 bg-purple-700 text-white rounded-lg  font-semibold transition-all duration-300 hover:bg-purple-900 flex justify-center items-center gap-2"><FaUsers /> Users</button></Link>
      <Link to='/posts'><button className="py-1.5 px-4 bg-purple-700 text-white rounded-lg  font-semibold transition-all duration-300 hover:bg-purple-900 flex justify-center items-center gap-2"><MdLocalPostOffice /> Posts</button></Link>
    </header>
  );
};
