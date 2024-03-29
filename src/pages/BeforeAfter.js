import { useState, useEffect } from 'react'
import './BeforeAfter.css'
import Data from '../data/BeforeAfterData'

const BeforeAfter = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
        const interval = setInterval(() => {
          setIndex(index+1)
          if (index >= Data.length -1) setIndex(0)
        }, 4000);
        return () => clearInterval(interval);
    });

    const previousPic = () => {
      setIndex(index - 1)
      if (index === 0) setIndex(Data.length - 1)
    }

    const nextPic = () => {
      setIndex(index + 1)
      if (index === Data.length - 1) setIndex(0)
    }
  return (
  <div className='before-after-container fade'>
    <i className="fa-thin fa-chevron-left arrows-mobile" onClick={previousPic}></i>
        <div className='slider-container'>
            <i class="fa-thin fa-chevron-left arrows-desktop" onClick={previousPic}></i>
            <div className='image'>
                <img src={Data[index].img_before} alt={Data[index].alt_before} className='images'></img>
                <h1 className='before-after'>BEFORE</h1>
            </div>
            <div className='image'>
              <a href={Data[index].link} target={"new"}>
                <img src={Data[index].img_after} alt={Data[index].alt_after} className='images'></img>
              </a>
                <h1 className='before-after'>AFTER</h1>
            </div>
            <i className="fa-thin fa-chevron-right arrows-desktop" onClick={nextPic}></i>
        </div>
        <i className="fa-thin fa-chevron-right arrows-mobile" onClick={nextPic}></i>
  </div>
  )
}

export default BeforeAfter