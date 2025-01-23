import React from 'react';
import NavBarItem from './NavBarItem';

const NavBar: React.FC = () => {
  const navItems = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="flex justify-around bg-gray-600 text-white py-4">
      {navItems.map((item) => (
        <NavBarItem key={item.to} label={item.label} to={item.to} />
      ))}
    </nav>
  );
};

export default NavBar;
