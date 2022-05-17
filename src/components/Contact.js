// ! FILES
import React from 'react';
import '../styles/index.css';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section className='section-contact'>
      <form className='form'>
        <h3 className='title'>nous contacter</h3>
        <div className='title-underline'></div>
        <article className='form-row'>
          <label htmlFor='object' className='form-label'>
            Objet du message
          </label>
          <input
            type='text'
            name='object'
            className='form-input'
            placeholder='Entrez un objet de message'
          />
        </article>
        <article className='form-row'>
          <label htmlFor='body' className='form-label'>
            Message
          </label>
          <textarea
            name='body'
            className='form-textarea'
            placeholder='Entrez votre message'
          ></textarea>
        </article>
        <button className='btn btn-block'>Envoyer le message</button>
      </form>
    </section>
  );
};

export default Contact;
