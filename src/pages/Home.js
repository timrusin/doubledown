import React from 'react'
import Donnie from '../images/Donnie.jpeg'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <img src={Donnie} alt="Donnie Longtin" width="100%"></img>
      <img src={Donnie} alt="Donnie Longtin" width="100%"></img>
    </div>
  );
}

export default Home