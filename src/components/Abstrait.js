// ! FILES
import React from 'react';
import { abstrait } from '../data';
import '../styles/Abstrait.css';

const Abstrait = () => {
  return (
    <article className='abstrait-container'>
      {abstrait.map((item) => {
        const { id, name, src } = item;

        return (
          <div key={id} className={`cell cell-${id}`}>
            <img src={src} alt={name} className='img' />
          </div>
        );
      })}
    </article>
  );
};

export default Abstrait;
