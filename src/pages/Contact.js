import React from 'react'
import ContactForm from '../components/ContactForm';
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Request a free quote</h1>
      <ContactForm/>
      <p>*Paint correction refers to the polishing process of removing light surface scratches and restoring the gloss appearence of the paint.</p>
      <p>Oftentimes micro swirling and paint defects are a result of brush car washes.</p>
    </div>
  );
}

export default Contact