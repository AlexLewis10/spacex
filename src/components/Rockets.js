import React, { useState, useEffect } from 'react'

function Rockets ( { rockets } ) {
  const [rocketsInfo, setRocketsInfo] = useState(null)

  useEffect(() => {
      setRocketsInfo(JSON.parse(rockets))
    }, [rockets])

  return (
    <div>
      <h3>Rockets</h3>
    </div>
  )
}

export default Rockets