import React, { useState, useEffect }from 'react'
import Rockets from '../components/Rockets'
import Dragons from './Dragons'
import Axios from 'axios'

function App () {
  const [showRockets, setShowRockets] = useState(false)
  const [showDragons, setShowDragons] = useState(false)
  const [rockets, setRockets] = useState(false)
  const [dragons, setDragons] = useState(false)

  useEffect(() => {
    if(!rockets) {
      Axios({
      method: 'GET',
      url: `https://api.spacexdata.com/v3/rockets`
    }).then(response => {
        const result = JSON.stringify(response.data)
        setRockets(result)
      })
    }
  })

  useEffect(() => {
    if(!dragons) {
      Axios({
      method: 'GET',
      url: `https://api.spacexdata.com/v3/dragons`
    }).then(response => {
        const result = JSON.stringify(response.data)
        setDragons(result)
      })
    }
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
      {showRockets ? <Rockets rockets={rockets} /> : null}
      {showDragons ? <Dragons /> : null}
    </div>
  )
}

export default App
