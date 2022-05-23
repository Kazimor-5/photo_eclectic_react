// ! FILES
import React, { useState } from 'react';
import { navLinks } from '../data';
import '../styles/index.css';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const showSidebar = () => setIsShowSidebar(true);
  const hideSidebar = () => setIsShowSidebar(false);

  return (
    <nav className={isShowSidebar ? 'hide-sidebar' : 'navbar'}>
      <button
        onClick={() => showSidebar()}
        className={isShowSidebar ? 'close-sidebar-btn' : 'open-sidebar-btn'}
      >
        <FaBars /> MENU
      </button>
      <ul className={isShowSidebar ? 'show-sidebar nav-links' : 'nav-links'}>
        <button onClick={() => hideSidebar()} className='close-sidebar-btn'>
          <FaTimes />
        </button>
        {navLinks.map((navLink) => {
          const { id, name, anchor, src } = navLink;

          if (id === 1) {
            return (
              <li key={id} className='nav-btn'>
                <Link className='nav-anchor' to={anchor}>
                  <div className='nav-img-container'>
                    <img src={src} alt={name} className='img' />
                  </div>{' '}
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
