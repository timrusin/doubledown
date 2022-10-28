import React from 'react'
import './Home.css'
import About from './About'

const Home = () => {
  return (
    <div className="home-container fade">
      <img src="/assets/medium_photos/lambo_front_medium.jpeg" alt="lambo"></img>
      <About/>
    </div>
  );
}

export default Home