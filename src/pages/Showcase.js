import { useState, useEffect } from 'react'
import showcaseData from '../data/ShowcaseData'
import './Showcase.css'

const Showcase = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
          const interval = setInterval(() => {
            setIndex(index+1)
            if (index >= showcaseData.length -1) setIndex(0)
          }, 4000);
          return () => clearInterval(interval);
      });

      const previousPic = () => {
        setIndex(index - 1)
        if (index === 0) setIndex(showcaseData.length - 1)
      }
  
      const nextPic = () => {
        setIndex(index + 1)
        if (index === showcaseData.length - 1) setIndex(0)
      }
    return (
      <div className= 'showcase-carousel fade'>
      <img src={showcaseData[index].img} alt={showcaseData[index].alt} style={{objectPosition: showcaseData[index].position}} className={index % 2 !== 0 ? 'bg-image fade' : 'hide'}></img>
      <img src={showcaseData[index].img} alt={showcaseData[index].alt} style={{objectPosition: showcaseData[index].position}} className={index % 2 === 0 ? 'bg-image fade' : 'hide'}></img>
        <div className='nav-arrows-container'>
          <i className="fa-thin fa-chevron-left arrows" onClick= {previousPic}></i>
          <i className="fa-thin fa-chevron-right arrows" onClick= {nextPic}></i>
        </div>
      </div>
    )
  }

export default Showcase