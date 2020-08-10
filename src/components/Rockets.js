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
        key={rocket.rocket_name}
        name={rocket.rocket_name}
        height={rocket.height.meters}
        mass={rocket.mass.kg}
        engines={rocket.engines.thrust_sea_level.kN}
        fuel={rocket.engines.propellant_1}
        fuel2={rocket.engines.propellant_2}
        wikipedia={rocket.wikipedia}
        description={rocket.description}
        img1={rocket.flickr_images[0]}
        img2={rocket.flickr_images[1]}
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