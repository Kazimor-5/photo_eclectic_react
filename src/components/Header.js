// ! FILES
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';
import '../styles/header.css';

const Header = () => {
  return (
    <header className='header'>
      <h1>PhotoEclectic</h1>
      <p>capturez vos moments !</p>
      <Link to='/portfolio' className='btn'>
        Portfolio
      </Link>
    </header>
  );
};

export default Header;
