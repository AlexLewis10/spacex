import React, { useState } from 'react'
import './Rocket.css'

function Rocket (props) {

  const displayFullView = () => {
    props.getFullRocketInfo(props.name)
  }

  const getUrl = () => {
    
    return props.img 
  }
  return (
    <div style={{
      backgroundImage: `url(${props.img})`,
      backgroundSize: 'cover',
    }} 
    className='rocket'>
      <div className='rocket-info'>
        <p >Name: {props.name}</p>
        <p >Height: {props.height}m</p>
        <p >Mass: {props.mass}kg</p>
      </div>
      <button className='more-info' onClick={displayFullView}
        >More info
      </button>
    </div>
  )
}

export default Rocket