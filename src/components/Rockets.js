import React, { useState, useEffect } from 'react'
import './Rockets.css'
import Rocket from './Rocket'
import RocketFull from './RocketFull'

function Rockets ( { rockets } ) {
  const [rocketsInfo, setRocketsInfo] = useState(null)
  const [fullView, setFullView] = useState(false)
  const [showFullView, setShowFullView] = useState(false)

  useEffect(() => {
    setRocketsInfo(JSON.parse(rockets))
    }, [rockets])

  const getFullRocketInfo = (name) => {
    setShowFullView(true)
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
        img={rocket.flickr_images[0]}
        getFullRocketInfo={getFullRocketInfo}
      /> 
    }) : null
  }

  const fullViewDiv = () => {
    if (showFullView) {
      return (
        <div className='full-view-container'>
          {fullView}
        </div>
      )
    }
  }

  return (
    <div>
      <div className='grid-container'>
        {displayRockets()}
      </div>
      <div id='full'>
        {fullViewDiv()}
      </div>
    </div>
  )
}

export default Rockets