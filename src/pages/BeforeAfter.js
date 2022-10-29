import { useState, useEffect } from 'react'
import './BeforeAfter.css'
import Data from '../data/BeforeAfterData'

const BeforeAfter = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
        const interval = setInterval(() => {
          setIndex(index+1)
          if (index >= Data.length -1) setIndex(0)
        }, 6000);
        return () => clearInterval(interval);
    });
    console.log(index);
    const previousPic = () => {
      setIndex(index - 1)
      if (index === 0) setIndex(Data.length - 1)
    }

    const nextPic = () => {
      setIndex(index + 1)
      if (index === Data.length - 1) setIndex(0)
    }
  return (
  <div className='before-after-container'>
    <i class="fa-sharp fa-solid fa-arrow-left arrows-mobile" onClick={previousPic}></i>
        <div className='slider-container'>
            <i class="fa-sharp fa-solid fa-arrow-left arrows-desktop" onClick={previousPic}></i>
            <div className='image'>
                <img src={Data[index].img_before} alt={Data[index].alt_before} className='images'></img>
                <h1 className='before-after'>BEFORE</h1>
            </div>
            <div className='image'>
                <img src={Data[index].img_after} alt={Data[index].alt_after} className='images'></img>
                <h1 className='before-after'>AFTER</h1>
            </div>
            <i class="fa-sharp fa-solid fa-arrow-right arrows-desktop" onClick={nextPic}></i>
        </div>
        <i class="fa-sharp fa-solid fa-arrow-right arrows-mobile" onClick={nextPic}></i>
  </div>
  )
}

export default BeforeAfter