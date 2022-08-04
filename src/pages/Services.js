import React from 'react'
import './Services.css'
import Ratecard from '../components/Ratecard';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-title">
        <h1>Services</h1>
      </div>
      <div className="test">
        <Ratecard />
      </div>
    </div>
  );
}

export default Services