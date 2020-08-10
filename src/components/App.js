import React, { useState, useEffect }from 'react'
import Rockets from '../components/Rockets'
import Dragons from './Dragons'
import Axios from 'axios'

function App () {
  const [showRockets, setShowRockets] = useState(false)
  const [showDragons, setShowDragons] = useState(false)

  useEffect(() => {
      Axios({
      method: 'GET',
      url: `https://api.spacexdata.com/v3/rockets`
    }).then(response => {
        console.log(response.data)
      })
  })

  const handleShowRockets = () => {
    setShowRockets(true)
    setShowDragons(false)
  }

  const handleShowDragons = () => {
    setShowDragons(true)
    setShowRockets(false)
  }



  return (
    <div>
      <h2>SpaceX</h2>
      <button id='Rockets' onClick={handleShowRockets}>Rockets</button>
      <button id='Dragons' onClick={handleShowDragons}>Dragons</button>
      {showRockets ? <Rockets /> : null}
      {showDragons ? <Dragons /> : null}
    </div>
  )
}

export default App
