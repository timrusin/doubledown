import React from 'react'
import './About.css'
import dev_bg_low from '../assets/images/products-edit-low.mp4'
const About = () => {
  return (
    <div className="about-container fade-in">
      <div className="about-bio">
        <h1>About Double Down</h1>
        <p>
        My name is Donnie Longtin and I am the owner and operator of Double Down Auto Detailing. 
        Ever since owning my first car, a 1989 Mitsubishi Galant, I have been passionate about the maintenance of vehicles. 
        </p>

        <p>
        As I have grown older I have been able to share my passion for detailing with others in supporting their needs 
        for a well-maintained vehicle. 
        </p>

        <p>
        What started as a weekend hobby over the years has grown into an obsession. 
        There is nothing more rewarding than taking the time to produce an incredibly detailed end result.  
        </p>

        <p>
        I pride myself on staying up to date on the most advanced detailing processes and most advanced approaches
         toward cleaning. 
        </p>

        <p>
        In my opinion, there is nothing more satisfying than climbing into a clean vehicle and focusing on your tasks at hand. 
        </p>

        <p>
        Thank you for giving me the opportunity to produce a great result detailing your vehicle. 
        </p>
      </div>
      <div className="about-video">
        <video
          src={dev_bg_low}
          autoPlay
          playsInline
          loop
          muted
          className="product-video"
        />
      </div>
    </div>
  );
}

export default About