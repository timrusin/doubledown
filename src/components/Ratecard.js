import React from 'react'
import './Ratecard.css'
import {Link} from 'react-router-dom'

const Ratecard = () => {
  return (
    <div className="rate-card inner-border">
      <div className="top-left">
        <h1 className="D">D</h1>
        <i className="fa-solid fa-heart"></i>
      </div>
      <div className="content">
        <h1>Service Name</h1>
        <ul className="service-list">
          <li>service 1 place holder</li>
          <li>service 2 place holder</li>
          <li>service 3 place holder</li>
          <li>service 4 place holder</li>
        </ul>
        <Link to="/contact" className='quote-links'>GET A QUOTE</Link>
      </div>
    </div>
  );
}

export default Ratecard