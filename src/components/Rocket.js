import React, { useState } from 'react'
import './Rocket.css'

function Rocket (props
  // name, 
  // height, 
  // mass,
  // engines, 
  // fuel, 
  // fuel2, 
  // wikipedia, 
  // description, 
  // img1, 
  // img2 
   ) {

  const [fullView, setFullView] = useState(false)

  const displayFullView = () => {
    setFullView(true)
    props.getFullRocketInfo(props.name)
  }

  const showFullView = () => {
    return <p>Hello</p>
  }

  return (
    
    <div className='rocket'>
      <p>{props.name}</p>
      <p>{props.height}</p>
      <p>{props.mass}</p>
      <button onClick={displayFullView}>More info</button>
      { fullView ? showFullView() : null }
      {/* <p>{engines}</p>
      <p>{fuel}</p>
      <p>{fuel2}</p> */}
      {/* <p>{wikipedia}</p>
      <p>{description}</p>
      <p>{img1}</p>
      <p>{img2}</p> */}
    </div>
  )
}

export default Rocket