import React, { useState, useEffect } from 'react'
import Dragon from './Dragon'


function Dragons ( { dragons }) {
  const [dragonsInfo, setDragonsInfo] = useState(null)
  
  useEffect(() => {
  setDragonsInfo(JSON.parse(dragons))
  }, [dragons])

  const displayDragons = () => {
    return dragonsInfo ? dragonsInfo.map((dragon) => { 
      return <Dragon 
        key={dragon.name}
        name={dragon.name}
        height={dragon.height_w_trunk.meters}
        payload={dragon.launch_payload_mass.kg}
        img={dragon.flickr_images[0]}
        // getFulldragonInfo={getFulldragonInfo}
      /> 
    }) : null
  }
  
  return (
  <div>
    <div className='grid-container'>
      {displayDragons()}
    </div>
  </div>
  )
}

export default Dragons 