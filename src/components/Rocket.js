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
      <p className='rocket-info'>Name: {props.name}</p>
      <p className='rocket-info'>Height: {props.height}m</p>
      <p className='rocket-info'>Mass: {props.mass}kg</p>
      <button className='more-info' onClick={displayFullView}
        >More info
      </button>
    </div>
  )
}

export default Rocket