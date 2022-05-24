// ! FILES
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { citations } from '../data';
import '../styles/index.css';
import '../styles/Citation.css';

gsap.registerPlugin(ScrollTrigger);

const Citations = () => {
  const slideInRight = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: duration || 0.3,
        delay: delay || 0.4,
        scrollTrigger: {
          trigger: elem,
          start: 'top bottom',
          end: 'bottom center',
        },
      }
    );
  };

  const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: duration || 0.3,
        delay: delay || 0.4,
        scrollTrigger: {
          trigger: elem,
          start: 'top bottom',
          end: 'bottom center',
        },
      }
    );
  };

  useEffect(() => {
    slideInLeft('.citation-1');
  }, []);

  useEffect(() => {
    slideInRight('.citation-2');
  }, []);

  useEffect(() => {
    slideInLeft('.citation-3');
  }, []);

  return (
    <section className='section-citation'>
      <h3>citation !</h3>
      {citations.map((citation) => {
        const { id, title, text } = citation;

        return (
          <article key={id} className={`citation citation-${id}`}>
            <h5>{title}</h5>
            <p>{text}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Citations;
