import React, { useState, useEffect } from 'react'
import './Vehicles.css'
import Rocket from './Rocket'
import RocketMoreInfo from './RocketMoreInfo'

function Rockets ( { rockets } ) {
  const [rocketsInfo, setRocketsInfo] = useState(null)
  const [moreInfo, setMoreInfo] = useState(false)
  const [showMoreInfo, setShowMoreInfo] = useState(false)

  useEffect(() => {
    setRocketsInfo(JSON.parse(rockets))
    }, [rockets])

  const getFullRocketInfo = (name) => {
    setShowMoreInfo(true)
    rocketsInfo.filter((rocket) => {
      if (rocket.rocket_name === name) {
        setMoreInfo(<RocketMoreInfo
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

  const moreInfoDiv = () => {
    if (showMoreInfo) {
      return (
        <div className='full-view-container'>
          {moreInfo}
        </div>
      )
    }
  }

  return (
    <div>
      <div className='grid-container'>
        {displayRockets()}
      </div>
      <div id='react-scroll-target'>
        {moreInfoDiv()}
      </div>
    </div>
  )
}

export default Rockets