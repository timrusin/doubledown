import { useEffect, useState } from 'react'
import './Ratecard.css'
import {Link} from 'react-router-dom'

const Ratecard = () => {
  const [color, setColor] =useState('')
  const [suit, setSuit] = useState('')

  useEffect(()=>{
    const suits = ['fa-heart', 'fa-diamond', 'fa-droplet', 'fa-crown']
    const colors = ['red', 'black']
    const randomColor = Math.floor(Math.random()*2)
    const randomSuit = Math.floor(Math.random()*4)
    setColor(colors[randomColor])
    setSuit(suits[randomSuit])
  },[])

  return (
    <div className="rate-card inner-border">
      <div className="top-left">
        <h1 style={{color: color}} className="D" >D</h1>
        <i style={{color: color}} className={`fa-solid ${suit}`} ></i>
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
      <div className="bottom-right">
        <h1 style={{color: color}} className="D" >D</h1>
        <i style={{color: color}} className={`fa-solid ${suit}`} ></i>
      </div>
    </div>
  );
}

export default Ratecard