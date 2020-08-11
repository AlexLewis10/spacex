import React, { useState, useEffect } from 'react'
import Dragon from './Dragon'
import DragonFull from './DragonFull'


function Dragons ( { dragons }) {
  const [dragonsInfo, setDragonsInfo] = useState(null)
  const [fullView, setFullView] = useState(false)
  const [showFullView, setShowFullView] = useState(false)
  
  useEffect(() => {
  setDragonsInfo(JSON.parse(dragons))
  }, [dragons])

  const getFullDragonInfo = (name) => {
    setShowFullView(true)
    //Take a look at this method, refactor and remove unused stuff
    dragonsInfo.filter((rocket) => {
      if (rocket.rocket_name === name) {
        setFullView(<DragonFull 
          // key={rocket.rocket_name}
          // name={rocket.rocket_name}
          // height={rocket.height.meters}
          // mass={rocket.mass.kg}
          // engines={rocket.engines.thrust_sea_level.kN}
          // fuel={rocket.engines.propellant_1}
          // fuel2={rocket.engines.propellant_2}
          // wikipedia={rocket.wikipedia}
          // description={rocket.description}
          // img1={rocket.flickr_images[0]}
          // img2={rocket.flickr_images[1]}
        />)
      }
      return null
    })
  }

  const displayDragons = () => {
    return dragonsInfo ? dragonsInfo.map((dragon) => { 
      return <Dragon 
        key={dragon.name}
        name={dragon.name}
        height={dragon.height_w_trunk.meters}
        payload={dragon.launch_payload_mass.kg}
        img={dragon.flickr_images[0]}
        getFullDragonInfo={getFullDragonInfo}
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
      {displayDragons()}
    </div>
    <div id='full'>
        {fullViewDiv()}
      </div>
  </div>
  )
}

export default Dragons 