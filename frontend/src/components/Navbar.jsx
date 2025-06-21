import React, { useState } from "react"; // React and useState for state management
import { Link } from "react-router-dom"; // Link for routing navigation
import { assets } from "../assets/assets"; // Assets for the logo
import { MenuIcon, SearchIcon, XIcon } from "lucide-react"; // Icons from lucide-react
import LoginButton from "./LoginButton"; // Custom Login component with Clerk integration

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Controls mobile navigation visibility

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
      {/* Logo Section */}
      <Link to="/" className="max-md:flex-1">
        <img src={assets.logo} alt="Vahak Logo" className="w-25 h-auto" />
      </Link>

      {/* Navigation Links */}
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${
          isOpen ? "max-md:w-full" : "max-md:w-0"
        }`}
      >
        {/* Close Icon for Mobile Navigation */}
        <XIcon
          className="md:hidden absolute top-6 w-6 h-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />

        {/* Navigation Links */}
        <Link
          to="/"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
        >
          Home
        </Link>

        <Link
          to="/My_Loads"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
        >
          My Loads
        </Link>

        <Link
          to="/My_Lorries"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
        >
          My Lorries
        </Link>

        <Link
          to="/Marketplace"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
        >
          Marketplace
        </Link>

        <Link
          to="/Transport_Directory"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
        >
          Transport Directory
        </Link>
      </div>

      {/* Right Side: Search Icon & Login Button */}
      <div className="flex items-center gap-9">
        {/* Login button with Clerk integration */}
        <LoginButton />
      </div>

      {/* Hamburger Icon for Mobile Menu Toggle */}
      <MenuIcon
        className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default Navbar;
