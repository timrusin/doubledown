import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import './Contact.css'

const Contact = () => {
  const [clicked, setClicked] = useState(false)
  let { name } = useParams()
  
  return (
    <div className="contact-container fade">
      {clicked === false ? <h1 className='contact-title'>Request a Free Quote</h1> : null}
      <ContactForm serviceName = {name} setClicked = {setClicked}/>
      {clicked === false ?
        <div>
          <p className='astericks'>*Paint correction refers to the polishing process of removing light surface scratches and restoring the gloss appearence of the paint.</p>
          <p className='astericks'>Oftentimes micro swirling and paint defects are a result of brush car washes.</p>
        </div> : null}
    </div>
  );
}

export default Contact
