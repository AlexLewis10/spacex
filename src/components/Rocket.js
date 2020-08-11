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
      <Link to='full' smooth={true} duration={1000}>
        <button className='more-info' onClick={displayFullView}>
          More info
        </button>
      </Link>
    </div>
  )
}

export default Rocket