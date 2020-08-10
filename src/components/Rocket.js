import React, { useState } from 'react'
import './Rocket.css'

function Rocket ( { 
  name, 
  height, 
  mass, 
  // engines, 
  // fuel, 
  // fuel2, 
  // wikipedia, 
  // description, 
  // img1, 
  // img2 
  } ) {

  const [fullView, setFullView] = useState(false)

  const displayFullView = () => {
    setFullView(true)
  }

  const showFullView = () => {
    return <p>Hello</p>
  }

  return (
    <div className='rocket'>
      <p>{name}</p>
      <p>{height}</p>
      <p>{mass}</p>
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