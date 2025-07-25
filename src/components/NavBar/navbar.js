import React from 'react'
import './navbar.css';
import { Link } from 'react-scroll';

//images
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Skills</Link>
            <Link className="desktopMenuListItem">Projects</Link>
            <Link className="desktopMenuListItem">Contact</Link>
        </div>

        <button className='desktopMenuButton'>
            <img src={contactImg} alt="Icon" className="desktopMenuIcon" />
            Contact Me
        </button>

    </nav>
  )
}

export default Navbar