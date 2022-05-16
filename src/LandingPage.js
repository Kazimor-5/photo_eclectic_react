// ! COMPONENTS
import Header from './components/Header';
import Presentation from './components/Presentation';
import Citations from './components/Citations';
// ! FILES
import React from 'react';
import './styles/index.css';

const LandingPage = () => {
  return (
    <main className='container'>
      <Header />
      <Presentation />
      <Citations />
    </main>
  );
};

export default LandingPage;
