// ! COMPONENTS
import BtnUp from './BtnUp';
// ! FILES
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import '../styles/index.css';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <article className='informations'>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.instagram.com/0photoeclectic/'
          className='social-link'
        >
          <FaInstagram />
        </a>
        <p className='contact'>contact: 06.62.83.44.18</p>
        <p className='rights'>&copy; 2021, PhotoEclectic</p>
        <p className='creator'>SOLEDANE</p>
        <p className='email'>photoeclecticsoledane@gmail.com</p>
      </article>
      <BtnUp />
    </footer>
  );
};

export default Footer;
