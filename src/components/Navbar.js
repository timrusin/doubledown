import React from 'react'
import { useState } from 'react'
import "./Navbar.css"
import logo1 from "../images/logo1.jpg"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick (!click)
    const closeMenu = () => setClick (false)

  return (
    <div className={click ? "navbar active" : "navbar"}>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-dash menu-dashes-angle1" : "fas fa-dash menu-dashes"}/>
        <i className={click ? "fas fa-dash menu-dashes-angle2" : "fas fa-dash menu-dashes"}/>
        <i className={click ? "fas fa-dash menu-dashes-angle2" : "fas fa-dash menu-dashes"}/>
      </div>
      <Link to="/" onClick={closeMenu}>
        <img
          className={click ? "nav-logo logo-spin" : "nav-logo"}
          src={logo1}
          alt="Double Down Logo"
        ></img>
      </Link>
      <div className={click ? "title title-nudge" : "title"}>DOUBLE DOWN</div>
      <div className={click ? "sub-title title-nudge" : "sub-title"}>
        auto detailing service
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link className="nav-links" to="/services" onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-links" to="/before_after" onClick={closeMenu}>
            Before/After
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-links" to="/showcase" onClick={closeMenu}>
            Showcase
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-links" to="/contact" onClick={closeMenu}>
            FreeQuote
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar