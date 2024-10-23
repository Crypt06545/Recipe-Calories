import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between p-4 border-b-2 lg:w-11/12 mx-auto bg-[#1D232A]">
      {/* Logo */}
      <div className="text-3xl font-bold text-[#0BE58A]">
        Recipe Calories
      </div>

      {/* Hamburger Icon (visible on mobile) */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-800 focus:outline-none"
        >
          <i className="fa-solid fa-bars fa-lg text-white"></i>
        </button>
      </div>

      {/* Nav Links */}
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 w-full bg-[#1D232A] md:flex md:static md:w-auto md:space-x-8 md:bg-transparent md:block text-gray-600`}
      >
        <li className="text-gray-400 font-medium hover:text-[#0BE58A] p-2 md:p-0">
          <a href="#" className="block md:inline-block">Home</a>
        </li>
        <li className="text-gray-400 font-medium hover:text-[#0BE58A] p-2 md:p-0">
          <a href="#" className="block md:inline-block">Recipes</a>
        </li>
        <li className="text-gray-400 font-medium hover:text-[#0BE58A] p-2 md:p-0">
          <a href="#" className="block md:inline-block">About</a>
        </li>
        <li className="text-gray-400 font-medium hover:text-[#0BE58A] p-2 md:p-0">
          <a href="#" className="block md:inline-block">Search</a>
        </li>
      </ul>

      {/* Search bar with icon */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-sm w-full"
        />
        <button className="text-gray-500">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      {/* User Profile Icon */}
      <div className="hidden md:flex w-10 h-10 rounded-full bg-green-400 items-center justify-center ml-4">
      <i className="fa-regular fa-circle-user text-2xl"></i>
      </div>
    </nav>
  );
};

export default Navbar;
