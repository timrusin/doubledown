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
      <ul className="nav-menu">
        <li className="nav-item">
          <Link className="nav-links" to="">
            Test1
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-links" to="">
            Test2
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-links" to="">
            Test3
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-links" to="">
            Test4
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-links" to="">
            Test5
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar