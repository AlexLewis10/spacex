import React, { useState } from 'react'
import './Rocket.css'
import { Link } from 'react-scroll'

function Rocket (props) {

  const displayFullView = () => {
    props.getFullRocketInfo(props.name)
  }

  return (
    <div style={{
      backgroundImage: `url(${props.img})`,
      backgroundSize: 'cover',
    }} 
      className='rocket'>
      <div className='rocket-info'>
        <p >{props.name}</p>
        <p >Height: {props.height}m</p>
        <p >Mass: {props.mass}kg</p>
      </div>
      <Link 
        className='more-info' 
        to='full' smooth={true} 
        duration={1500} 
        onClick={displayFullView}>
        More info
      </Link>
    </div>
  )
}

export default Rocket