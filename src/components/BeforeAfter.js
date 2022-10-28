import React from 'react'
import './BeforeAfter.css'

const BeforeAfter = () => {
  return (
    <>
    <i class="fa-sharp fa-solid fa-arrow-left arrows-mobile"></i>
        <div className='before-after-container'>
        <i class="fa-sharp fa-solid fa-arrow-left arrows-desktop"></i>
            <div className='image'>
                <img src='/assets/before_after_photos/interior_back_before.jpeg' alt="" className='images'></img>
                <h1 className='before-after'>BEFORE</h1>
            </div>
            <div className='image'>
                <img src='/assets/before_after_photos/interior_back_after.jpeg' alt="" className='images'></img>
                <h1 className='before-after'>AFTER</h1>
            </div>
            <i class="fa-sharp fa-solid fa-arrow-right arrows-desktop"></i>
        </div>
        <i class="fa-sharp fa-solid fa-arrow-right arrows-mobile"></i>
    </>
  )
}

export default BeforeAfter