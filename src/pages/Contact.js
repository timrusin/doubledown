import React from 'react';
import { useParams } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import './Contact.css'

const Contact = () => {
  
  let { name } = useParams()
  
  return (
    <div className="contact-container fade">
      <h1 className='contact-title'>Request a Free Quote</h1>
      <ContactForm serviceName = {name}/>
        <p className='astericks'>*Paint correction refers to the polishing process of removing light surface scratches and restoring the gloss appearence of the paint.</p>
        <p className='astericks'>Oftentimes micro swirling and paint defects are a result of brush car washes.</p>
    </div>
  );
}

export default Contact
