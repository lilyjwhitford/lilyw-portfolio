import React, { useState, useEffect } from 'react';
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem
} from "@heroui/react";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <NavbarBrand className="ml-[-4rem]">
          <a href="#home" className="text-xl font-bold text-gray-800">lily whitford</a>
        </NavbarBrand>

        <NavbarContent className="hidden md:flex gap-6 mr-[-5rem]" justify="end">
          {["home", "about", "projects", "contact"].map((label) => (
            <NavbarItem key={label}>
              <a href={`#${label}`} className="cursor-pointer text-gray-800 hover:text-[#ecbfb1] transition">{label}</a>
            </NavbarItem>
          ))}
        </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
