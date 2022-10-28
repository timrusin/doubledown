import React from 'react'
import './BeforeAfter.css'

const BeforeAfter = () => {
  return (
    <div className='before-after-container'>
        <i class="fa-sharp fa-solid fa-arrow-left arrows"></i>
        <div className='image'>
            <img src='/assets/before_after_photos/wheel_before.jpeg' alt="" className='images'></img>
            <h1 className='before-after'>BEFORE</h1>
        </div>
        <div className='image'>
            <img src='/assets/before_after_photos/wheel_after.jpeg' alt="" className='images'></img>
            <h1 className='before-after'>AFTER</h1>
        </div>
        <i class="fa-sharp fa-solid fa-arrow-right arrows"></i>
    </div>
  )
}

export default BeforeAfter