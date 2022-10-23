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
        <div className={cardOne ? "card-one" : "card-hide"}>
          <Ratecard 
            name={ServiceData[0].name}
            subName={ServiceData[0].subName}
            bulletOne={ServiceData[0].bulletOne}
            bulletTwo={ServiceData[0].bulletTwo}
            bulletThree={ServiceData[0].bulletThree}
            bulletFour={ServiceData[0].bulletFour}
            bulletFive={ServiceData[0].bulletFive}
            bulletSix={ServiceData[0].bulletSix}
            bulletSeven={ServiceData[0].bulletSeven}
          />
        </div>
        <div className={cardTwo ? "card-two" : "card-hide"}>
          <Ratecard
            name={ServiceData[1].name}
            subName={ServiceData[1].subName}
            bulletOne={ServiceData[1].bulletOne}
            bulletTwo={ServiceData[1].bulletTwo}
            bulletThree={ServiceData[1].bulletThree}
            bulletFour={ServiceData[1].bulletFour}
            bulletFive={ServiceData[1].bulletFive}
            bulletSix={ServiceData[1].bulletSix}
            bulletSeven={ServiceData[1].bulletSeven}
            bulletEight={ServiceData[1].bulletEight}
            bulletNine={ServiceData[1].bulletNine}
          />
        </div>
        <div className={cardThree ? "card-three" : "card-hide"}>
          <Ratecard name={ServiceData[2].name}
            subName={ServiceData[2].subName}
            bulletOne={ServiceData[2].bulletOne}
            bulletTwo={ServiceData[2].bulletTwo}
            bulletThree={ServiceData[2].bulletThree}
            bulletFour={ServiceData[2].bulletFour}
            bulletFive={ServiceData[2].bulletFive}
            bulletSix={ServiceData[2].bulletSix}
           />
        </div>
        <div className={cardFour ? "card-four" : "card-hide"}>
          <Ratecard name={ServiceData[3].name}
          bulletOne={ServiceData[3].bulletOne}
          bulletTwo={ServiceData[3].bulletTwo}
          bulletThree={ServiceData[3].bulletThree}
          bulletFour={ServiceData[3].bulletFour}
          bulletFive={ServiceData[3].bulletFive}
          bulletSix={ServiceData[3].bulletSix}
          bulletSeven={ServiceData[3].bulletSeven}
          bulletEight={ServiceData[3].bulletEight}
          bulletNine={ServiceData[3].bulletNine} />
        </div>
      </div>
    </div>
  );
}

export default Services