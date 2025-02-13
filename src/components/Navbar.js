import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <StyledNav className="fixed w-full bg-neutral-900 z-50 shadow-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 relative">
          <motion.span
            className="text-xl md:text-2xl font-bold text-[#FF6D00] whitespace-nowrap text-left"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleNavigation('/')}
            // style={{ marginRight: "10px" }}
          >
            Namaste INDIA🙏🏻
          </motion.span>
          <div className="hidden md:flex md:space-x-4 lg:space-x-5">
            {[
              { name: "Home", path: "/" },
              // { name: "Features", path: "/features" },
              { name: "Destinations", path: "/destinations" },
              { name: "Crowd Monitor", path: "/crowd-monitor" },
              { name: "Accessibility", path: "/accessibility" },
              // { name: "Eco Initiatives", path: "/eco" },
              { name: "Transit Guide", path: "/local" },
              { name: "Book Now", path: "/eco-friendly-tourism" },
              { name: "Contact", path: "/feedback" },
              { name: "Login", path: "/login" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                onClick={() => handleNavigation(item.path)}
                className="nav-btn"
              >
                {item.name}
              </motion.div>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-400 hover:text-white">
              <motion.svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ rotate: 0 }}
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </motion.svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-neutral-900 p-2 flex flex-col items-center space-y-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { name: "Home", path: "/" },
            { name: "Features", path: "/features" },
            { name: "Destinations", path: "/destinations" },
            { name: "Crowd Monitor", path: "/crowd-monitor" },
            { name: "Accessibility", path: "/accessibility" },
            { name: "Eco Initiatives", path: "/eco" },
            { name: "Local Experiences", path: "/local" },
            { name: "Book Now", path: "/eco-friendly-tourism" },
            { name: "Contact", path: "/feedback" },
            { name: "Login", path: "/login" },

          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavigation(item.path)}
              className="nav-btn"
            >
              {item.name}
            </motion.div>
          ))}
        </motion.div>
      )}
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  .nav-btn {
    position: relative;
    color: #fff;
    text-transform: uppercase;
    padding: 0.4em 0.9em;
    font-weight: 600;
    font-size: 0.85rem;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;
  }

  .nav-btn::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: #FF6D00;
    bottom: 0;
    left: -100%;
    transition: all 0.3s ease;
  }

  .nav-btn:hover::before {
    left: 0;
  }

  .nav-btn:hover {
    color: #FF6D00;
  }
`;

export default Navbar;