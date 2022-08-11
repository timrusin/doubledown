import { useEffect, useState } from 'react'
import './Services.css'
import Ratecard from '../components/Ratecard';

const Services = () => {
  const [cardOne, setCardOne]= useState(false)
  const [cardTwo, setCardTwo]= useState(false)
  const [cardThree, setCardThree]= useState(false)
  const [cardFour, setCardFour]= useState(false)


  useEffect(()=> {
    const CardTwo = ()=>{
      setCardTwo(true)
      setTimeout(CardThree,400)
    }
    const CardThree = () => {
      setCardThree(true)
      setTimeout(CardFour, 400)
    }
    const CardFour = () => {
      setCardFour(true)
    }
    setCardOne(true)
    setTimeout(CardTwo,400)
},[])

  return (

    <div className="services-container">
      <div className="cards">
        <div className={cardOne ? "card-one" : "card-hide"}><Ratecard /></div>
        <div className={cardTwo? "card-two" : "card-hide"}><Ratecard /></div>
        <div className={cardThree ? "card-three" : "card-hide"}><Ratecard /></div>
        <div className={cardFour ? "card-four" : "card-hide"}><Ratecard /></div>
      </div>
    </div>
  );
}

export default Services