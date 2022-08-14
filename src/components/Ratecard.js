import './Ratecard.css'
import {Link} from 'react-router-dom'

const Ratecard = () => {
  const colors = ['red', 'black']
  const randomColor = Math.floor(Math.random()*2)

  return (
    <div className="rate-card inner-border">
      <div className="top-left">
        <h1 style={{color: colors[randomColor]}} className="D" >D</h1>
        <i style={{color: colors[randomColor]}} className="fa-solid fa-heart" ></i>
      </div>
      <div className="content">
        <h1>Service Name</h1>
        <ul className="service-list">
          <li>service 1 placeholder</li>
          <li>service 2 placeholder</li>
          <li>service 3 placeholder</li>
          <li>service 4 placeholder</li>
        </ul>
        <Link to="/contact" className='quote-link'>GET A QUOTE</Link>
      </div>
    </div>
  );
}

export default Ratecard