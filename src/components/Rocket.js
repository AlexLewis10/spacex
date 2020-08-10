import React, { useState } from 'react'
import './Rocket.css'

function Rocket (props) {

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
    </div>
  )
}

export default Rocket