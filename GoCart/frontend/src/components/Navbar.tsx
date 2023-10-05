//Including the props: Title/text, route Home

import React from 'react';

interface NavbarProps {
    title: string;
}
  
const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <div>
      <p>Title: {title}</p>
    </div>
  );
};

export default Navbar;

