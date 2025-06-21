import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HandshakeIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const meetVahakLinks = [
  { name: "About Us", link: "/About_Us" },
  { name: "How Vahak Helps", link: "/How_Vahak_Helps" },
  { name: "Why Choose Us", link: "/Why_Choose_Us" },
  { name: "Careers", link: "/Careers" },
  { name: "Contact Us", link: "/Contact_Us" },
];

const MeetVahakButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicked outside

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="px-5 py-2 rounded-full shadow-md backdrop-blur-lg bg-white/10 border border-gray-300/20 text-white font-medium hover:bg-white/20 transition"
      >
        {/* Icon and text for the button */}
        <span className="inline-flex items-center gap-2">
          <HandshakeIcon size={18} /> Meet Vahak
        </span>
      </button>
      {/* Customize Dropdown menu size and position*/}
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute right--1 top-15 w-42 rounded-xl shadow-xl backdrop-blur bg-white/10 border border-gray-300/20 overflow-hidden z-50"
          >
            {meetVahakLinks.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                onClick={() => setShowDropdown(false)}
                className="block w-full text-left px-5 py-3 text-white hover:bg-white/20 transition font-medium"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MeetVahakButton;
