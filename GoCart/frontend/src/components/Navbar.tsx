//Including the props: Title/text, route Home

// This is the Navbar component
// in mobile view, it will also contain a footer with buttons to navigate to the home page and browse page

import { Link } from 'react-router-dom'
import BrowseIcon from '../assets/BrowseIcon.svg'
import HomeIcon from '../assets/HomeIcon.svg'
import ModeToggleBtn from './ModeToggleBtn'

interface NavbarProps {
  title: string
}

function Navbar({ title }: NavbarProps) {
  return (
    <>
      <nav className="fixed h-20 w-screen bg-primary p-4 lg:pl-8 sm:pr-8 sm:flex sm:justify-between">
        <h1 className="text-center sm:text-left text-5xl text-white font-semibold col-span-4">
          <Link to={'/'}>{title}</Link>
        </h1>
        <div className="hidden sm:flex text-white text-lg justify-between gap-8 font-semibold">
          <Link className="hover:underline p-2" to={'/'}>
            Home
          </Link>
          <Link className="hover:underline p-2" to={'/ProductsPage'}>
            Products
          </Link>
          <ModeToggleBtn />
        </div>
      </nav>
      <footer className="sm:hidden fixed bottom-0 w-screen h-14 bg-primary grid grid-flow-col justify-items-center">
        <Link to="/">
          <img src={HomeIcon} className="h-12 pt-2" alt="Home" />
        </Link>
        <Link to="/ProductsPage">
          <img src={BrowseIcon} className="h-12 pt-2" alt="Products" />
        </Link>
      </footer>
    </>
  )
}

export default Navbar
