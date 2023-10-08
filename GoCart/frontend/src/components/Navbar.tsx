//Including the props: Title/text, route Home

// This is the Navbar component
// in mobile view, it will also contain a footer with buttons to navigate to the home page and browse page

import React from 'react';

import BrowseIcon from '../assets/BrowseIcon.svg';
import HomeIcon from '../assets/HomeIcon.svg';

interface NavbarProps {
    title: string;
}
  
const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <>
    <nav className='h-24 w-screen bg-green-700 py-6 px-5 sm:grid grid-flow-col grid-cols-5'>
      <h1 className='text-center sm:text-left text-5xl text-white font-extralight col-span-4'>{title}</h1>
      <div className='hidden sm:flex text-white justify-center gap-10'>
        <button className='hover:underline'>Home</button>
        <button className='hover:underline'>Browse</button>
      </div>
    </nav>
    <footer className='sm:hidden absolute bottom-0 w-screen h-14 bg-green-700 grid grid-flow-col justify-items-center'>
      <button><img src={HomeIcon} className='h-10 w-10' alt='Home'/></button>
      <button><img src={BrowseIcon} className='h-9 w-9' alt='Browse Items'/></button>
    </footer>
    </>
  );
};

export default Navbar;

