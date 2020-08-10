import React, { useState, useEffect } from 'react'
import './Rockets.css'
import Rocket from './Rocket'
import RocketFull from './RocketFull'

function Rockets ( { rockets } ) {
  const [rocketsInfo, setRocketsInfo] = useState(null)
  const [fullView, setFullView] = useState(false)

  useEffect(() => {
    setRocketsInfo(JSON.parse(rockets))
    }, [rockets])

  const getFullRocketInfo = (name) => {
    rocketsInfo.filter((rocket) => {
      if (rocket.rocket_name === name) {
        setFullView(<RocketFull 
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
        />)
      }
      return null
    })
  }

  const displayRockets = () => {
    return rocketsInfo ? rocketsInfo.map((rocket) => { 
      return <Rocket 
        key={rocket.rocket_name}
        name={rocket.rocket_name}
        height={rocket.height.meters}
        mass={rocket.mass.kg}
        getFullRocketInfo={getFullRocketInfo}
      /> 
    }) : null
  }

  return (
    <div className='grid-container'>
      {/* <h3>Rockets</h3> */}
      {displayRockets()}
      { fullView ? fullView : null }
    </div>
  )
}

export default Rockets