import React from 'react'
import "./Navbar.css"
import logo1 from "../images/logo1.jpg"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="container">
      <Link to="/">
        {" "}
        <img className="nav-logo" src={logo1} alt="Double Down Logo"></img>
      </Link>
      <div className="title">DOUBLE DOWN</div>
      <div className="sub-title">auto detailing service</div>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link className="nav-links" to="">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-links" to="">
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-links" to="">
            Gallery
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-links" to="">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar