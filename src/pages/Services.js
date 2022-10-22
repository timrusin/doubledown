import { useEffect, useState } from 'react'
import './Services.css'
import Ratecard from '../components/Ratecard';
import ServiceData from '../data/ServicesData'

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
  console.log(ServiceData[0]);
  return (

    <div className="services-container">
      <div className="cards">
        <div className={cardOne ? "card-one" : "card-hide"}><Ratecard name = {ServiceData[0].name}/></div>
        <div className={cardTwo? "card-two" : "card-hide"}><Ratecard name = {ServiceData[1].name}/></div>
        <div className={cardThree ? "card-three" : "card-hide"}><Ratecard name = {ServiceData[2].name}/></div>
        <div className={cardFour ? "card-four" : "card-hide"}><Ratecard name = {ServiceData[3].name}/></div>
      </div>
    </div>
  );
}

export default Services