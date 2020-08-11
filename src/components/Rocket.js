import React, { useState } from 'react'
import './Rocket.css'

function Rocket (props) {

  const displayFullView = () => {
    props.getFullRocketInfo(props.name)
  }

  return (
    <div className='rocket'>
      <p>{props.name}</p>
      <p>{props.height}</p>
      <p>{props.mass}</p>
      <button onClick={displayFullView}>More info</button>
    </div>
  )
}

export default Rocket