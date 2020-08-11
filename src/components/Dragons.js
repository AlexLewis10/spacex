import React, { useState, useEffect } from 'react'


function Dragons ( { dragons }) {
  const [dragonsInfo, setDragonsInfo] = useState(null)
  
  useEffect(() => {
  setDragonsInfo(JSON.parse(dragons))
  }, [dragons])
  
  return (
  <div>
    
  </div>
  )
}

export default Dragons 