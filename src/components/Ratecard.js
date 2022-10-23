import { useEffect, useState } from 'react'
import './Ratecard.css'
import {Link} from 'react-router-dom'

const Ratecard = (props) => {
  const [color, setColor] =useState('')
  const [suit, setSuit] = useState('')
  console.log(props);
  useEffect(()=>{
    const suits = ['fa-heart', 'fa-diamond', 'fa-spade', 'fa-club']
    const colors = ['red', 'black']
    const randomColor = Math.floor(Math.random()*2)
    const randomSuit = Math.floor(Math.random()*4)
    setColor(colors[randomColor])
    setSuit(suits[randomSuit])
  },[])

  return (
    <div className="rate-card inner-border">
      <div className="top-left">
        <h1 style={{ color: color }} className="D">
          D
        </h1>
        <i style={{ color: color }} className={`fa-solid ${suit}`}></i>
      </div>
      <div className="content">
        <h1 className='rate-name'>{props.name}</h1>
        <h3 className="sub-name">{props.subName}</h3>
        <ol className="service-list">
          <li>{props.bulletOne}</li>
          <li>{props.bulletTwo}</li>
          <li>{props.bulletThree}</li>
          <li>{props.bulletFour}</li>
          <li>{props.bulletFive}</li>
          <li>{props.bulletSix}</li>
          <li>{props.bulletSeven}</li>
          <li>{props.bulletEight}</li>
          <li>{props.bulletNine}</li>
        </ol>
        <Link to="/contact" className="quote-link">
          GET A QUOTE
        </Link>
        <div className="bottom-right">
          <h1 style={{ color: color }} className="D">
            D
          </h1>
          <i style={{ color: color }} className={`fa-solid ${suit}`}></i>
        </div>
      </div>
    </div>
  );
}

export default Ratecard