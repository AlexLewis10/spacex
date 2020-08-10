import React, { useState, useEffect } from 'react'
import Rocket from './Rocket'

function Rockets ( { rockets } ) {
  const [rocketsInfo, setRocketsInfo] = useState(null)

  useEffect(() => {
      setRocketsInfo(JSON.parse(rockets))
    }, [rockets])

  const displayRockets = () => {
    return rocketsInfo ? rocketsInfo.map((rocket) => { 
      return <Rocket 
      /> 
    }) : null
  }

  return (
    <div>
      <h3>Rockets</h3>
      <div>{displayRockets()}</div>
    </div>
  )
}

export default Rockets