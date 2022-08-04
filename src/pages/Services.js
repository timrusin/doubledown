import React from 'react'
import './Services.css'
import Ratecard from '../components/Ratecard';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-title">
        <h1>Services</h1>
      </div>
      <div className="cards">
        <div className='card'><Ratecard /></div>
        <div className='card'><Ratecard /></div>
        <div className='card'><Ratecard /></div>
        <div className='card'><Ratecard /></div>
      </div>
    </div>
  );
}

export default Services