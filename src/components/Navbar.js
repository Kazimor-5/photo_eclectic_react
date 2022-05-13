// ! FILES
import React from 'react';
import { navLinks } from '../data';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='nav-links'>
        {navLinks.map((navLink) => {
          const { id, name, anchor, src } = navLink;

          if (id === 1) {
            return (
              <li key={id} className='nav-btn'>
                <Link className='nav-anchor' to={anchor}>
                  <img src={src} alt={name} className='img' />
                </Link>
              </li>
            );
          } else {
            return (
              <li key={id} className='nav-btn'>
                <Link className='nav-anchor' to={anchor}>
                  {name}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
