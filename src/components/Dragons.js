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
    dragonsInfo.filter((dragon) => {
      if (dragon.name === name) {
        setFullView(<DragonFull 
          key={dragon.name}
          name={dragon.name}
          height={dragon.height_w_trunk.meters}
          payload={dragon.launch_payload_mass.kg}
          heatShield={dragon.heat_shield.temp_degrees}
          fuel={dragon.thrusters[0].fuel_1}
          fuel2={dragon.thrusters[0].fuel_2}
          wikipedia={dragon.wikipedia}
          description={dragon.description}
          img2={dragon.flickr_images[1]}
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
    <div id='dragon-grid' className='grid-container'>
      {displayDragons()}
    </div>
    <div id='full'>
        {fullViewDiv()}
      </div>
  </div>
  )
}

export default Dragons 