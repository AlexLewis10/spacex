import React, { useState, useEffect } from 'react'
import Dragon from './Dragon'
import DragonFull from './DragonFull'


function Dragons ( { dragons }) {
  const [dragonsInfo, setDragonsInfo] = useState(null)
  const [moreInfo, setMoreInfo] = useState(false)
  const [showMoreInfo, setShowMoreInfo] = useState(false)
  
  useEffect(() => {
  setDragonsInfo(JSON.parse(dragons))
  }, [dragons])

  const getFullDragonInfo = (name) => {
    setShowMoreInfo(true)
    dragonsInfo.filter((dragon) => {
      if (dragon.name === name) {
        setMoreInfo(<DragonFull 
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
    <div id='dragon-grid' className='grid-container'>
      {displayDragons()}
    </div>
    <div id='react-scroll-target'>
        {moreInfoDiv()}
      </div>
  </div>
  )
}

export default Dragons 
