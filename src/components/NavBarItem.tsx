import React from 'react';
import { Link } from 'react-scroll';

interface NavBarItemProps {
  label: string;
  to: string;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ label, to }) => {
  return (
    <Link
      to={to} // section id
      smooth={true}
      duration={500}
      spy={true} // highlights the link when the section is in view
      activeClass="text-blue-500 font-bold"
      offset={-70}
      className="cursor-pointer hover:text-gray-400 transition"
    >
      {label}
    </Link>
  );
};

export default NavBarItem;