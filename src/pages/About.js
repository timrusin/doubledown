import React from 'react'
import './About.css'
import dev_bg_low from '../assets/images/products-edit-low.mp4'
const About = () => {
  return (
    <div className="about-container">
      <div className="about-bio">
        <h1>About Double Down</h1>
        <p>
          Minim nulla Lorem aliqua sit esse ut ullamco duis. Labore anim officia
          excepteur sint eiusmod voluptate mollit. Dolor irure nulla esse
          excepteur est in sit ex dolor quis esse qui.
        </p>

        <p>
          Ut amet ad eu ipsum. Laborum labore amet aute consequat aute laborum
          incididunt. Consectetur id mollit Lorem pariatur velit do. Duis ad
          laborum ut nisi qui dolor.
        </p>

        <p>
          Sit adipisicing non nisi dolor. Commodo tempor qui nulla ad incididunt
          proident veniam et dolore in veniam laborum id. Esse ipsum esse
          eiusmod ut dolore consectetur sint sint voluptate incididunt. Cillum
          irure ullamco occaecat elit reprehenderit laboris duis veniam eu amet
          cupidatat pariatur consequat voluptate. Ullamco laborum aliquip
          occaecat ad elit cillum est ut. Aute non qui fugiat ipsum mollit est
          tempor non voluptate incididunt et.
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