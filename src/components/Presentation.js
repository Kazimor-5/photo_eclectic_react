// ! FILES
import React, { useEffect } from 'react';
import { presentation } from '../data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/index.css';
import '../styles/Presentation.css';

gsap.registerPlugin(ScrollTrigger);

const Presentation = () => {
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

  const slideInBottom = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
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

  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
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
    slideInRight('.presentation-title-1');
  }, []);

  useEffect(() => {
    slideInLeft('.presentation-text-2');
  }, []);

  useEffect(() => {
    slideInRight('.presentation-title-2');
  }, []);

  useEffect(() => {
    slideInLeft('.presentation-text-1');
  }, []);

  useEffect(() => {
    slideInTop('.container-1', 0.5);
  }, []);
  useEffect(() => {
    slideInBottom('.container-2', 0.5);
  }, []);

  return (
    <section className='section-presentation'>
      {presentation.map((item) => {
        const { id, title, text, src } = item;

        return (
          <article key={id} className='presentation-block'>
            <div className='content'>
              <h4 className={`presentation-title-${id}`}>{title}</h4>
              <p className={`presentation-text-${id}`}>{text}</p>
            </div>
            <div className={`presentation-img-container container-${id}`}>
              <img src={src} alt={title} className='img' />
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Presentation;
