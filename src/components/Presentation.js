// ! FILES
import React from 'react';
import { presentation } from '../data';
import '../styles/index.css';
import '../styles/presentation.css';

const Presentation = () => {
  return (
    <section className='section-presentation'>
      {presentation.map((item) => {
        const { id, title, text, src } = item;

        return (
          <article key={id} className='presentation-block'>
            <div className='content'>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
            <div className='presentation-img-container'>
              <img src={src} alt={title} className='img' />
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Presentation;
