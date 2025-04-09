import React, { useState, useEffect } from 'react';
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem
} from "@heroui/react";
import { Menu, X } from "lucide-react";

const NavBar: React.FC = () => {
  // state to track mobible menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // state to track if the page is scrolled and to apply the appropriate stylesto the navbar
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect to add a scroll event listener to the window
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      isBlurred
      isBordered
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? "bg-white/50 shadow-md backdrop-blur-lg" : "bg-transparent"}`}
      >
        <NavbarBrand className="pl-4 md:pl-6 lg:pl-8 xl:pl-20">
          <a href="#home" className="text-xl font-bold text-gray-800">lily whitford</a>
        </NavbarBrand>

        {/* desktop nav */}
        <NavbarContent className="hidden md:flex gap-6 pr-4 md:pr-6 lg:pr-8 xl:pr-20" justify="end">
          {["home", "about", "projects", "contact"].map((label) => (
            <NavbarItem key={label}>
              <a href={`#${label}`} className="cursor-pointer text-gray-800 hover:text-[#ecbfb1] transition">{label}</a>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* mobile menu button */}
        <div className="md:hidden text-gray-800 z-50 ml-auto mr-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="toggle menu" 
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* mobile menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-2/3 bg-white/50 backdrop-blur-lg shadow-lg z-40 flex flex-col items-center pt-24 gap-6 transition-transform duration-300 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {["home", "about", "projects", "contact"].map((label) => (
            <a 
              key={label} 
              href={`#${label}`} 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 hover:text-[#ecbfb1] transition text-lg"
            >
              {label}
            </a>
          ))}
        </div>
     </Navbar>
   );
};

export default NavBar;
