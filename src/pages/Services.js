import React from 'react'
import './Services.css'
import products from '../images/products-edit-low.mp4'
import Ratecard from '../components/Ratecard';

const Services = () => {
  return (
    <div className="services-container">
      {/* <video
        src={products}
        autoPlay
        playsInline
        loop
        muted
        className="fade-in product-video"
      /> */}
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