import { useState, useEffect } from 'react'
import ShowcaseData from '../data/ShowcaseData'

const Showcase = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
          const interval = setInterval(() => {
            setIndex(index+1)
            if (index >= ShowcaseData.length -1) setIndex(0)
          }, 6000);
          return () => clearInterval(interval);
      });
      console.log(index);
      const previousPic = () => {
        setIndex(index - 1)
        if (index === 0) setIndex(ShowcaseData.length - 1)
      }
  
      const nextPic = () => {
        setIndex(index + 1)
        if (index === ShowcaseData.length - 1) setIndex(0)
      }
    return (
      <div className= 'home-carousel fade'>
      <img src={ShowcaseData[index].url} alt={ShowcaseData[index].alt} style={{objectPosition: ShowcaseData[index].position}} className={index % 2 !== 0 ? 'bg-image fade' : 'hide fade'}></img>
      <img src={ShowcaseData[index].url} alt={ShowcaseData[index].alt} style={{objectPosition: ShowcaseData[index].position}} className={index % 2 === 0 ? 'bg-image fade' : 'hide fade'}></img>
        <div className='nav-arrows-container'>
          <i className="fa-thin fa-arrow-left arrows" onClick= {previousPic}></i>
          <i className="fa-thin fa-arrow-right arrows" onClick= {nextPic}></i>
        </div>
      </div>
    )
  }

export default Showcase