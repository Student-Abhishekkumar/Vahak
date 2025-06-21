import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";
import { SettingsIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { name: "Load Booking", link: "/Marketplace" },
  { name: "Lorry Booking", link: "/Marketplace" },
  { name: "Grow Network", link: "/Grow_Network" },
  { name: "Logistics Services", link: "/Logistics_Services" },
  { name: "Full Truck Load", link: "/Full_Truck_Load" },
  { name: "Part Load Booking", link: "/Part_Load_Booking" },
];

const ServicesButton = () => {
  const { user } = useUser();
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

  if (!user) return null; // Don't show if not signed in

  return (
    <div className="relative flex items-center gap-3" ref={dropdownRef}>
      {/* SERVICES BUTTON Customizations */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="px-5 py-2 rounded-full shadow-md backdrop-blur-lg bg-white/10 border border-gray-300/20 text-white font-medium hover:bg-white/20 transition"
      >
        {/* Icon and text for the button */}
        <span className="inline-flex items-center gap-2">
          <SettingsIcon size={18} /> Services
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
            className="absolute right-3 top-15 w-45 rounded-xl shadow-xl backdrop-blur bg-white/10 border border-gray-300/20 overflow-hidden z-50"
          >
            {services.map((service) => (
              <Link
                key={service.name}
                to={service.link}
                onClick={() => setShowDropdown(false)}
                className="block w-full text-left px-5 py-3 text-white hover:bg-white/20 transition font-medium"
              >
                {service.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CLERK USER PROFILE */}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default ServicesButton;
