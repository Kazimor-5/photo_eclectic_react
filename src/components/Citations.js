// ! FILES
import React from 'react';
import '../styles/index.css';
import '../styles/citation.css';
import { citations } from '../data';

const Citations = () => {
  return (
    <section className='section-citation'>
      <h3>citation !</h3>
      {citations.map((citation) => {
        const { id, title, text } = citation;

        return (
          <article key={id} className='citation'>
            <h5>{title}</h5>
            <p>{text}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Citations;
