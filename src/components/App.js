import React, { useState, useEffect }from 'react'
import Rockets from '../components/Rockets'
import Dragons from './Dragons'
import Axios from 'axios'
import './App.css'

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
      <div id='landing-section'>
        <h2>SpaceX</h2>
        <div id='navbar'>
          <button 
            className='select-btn' 
            id='Rockets' onClick={handleShowRockets}
            >Rockets
          </button>
          <button 
            className='select-btn' 
            id='Dragons' 
            onClick={handleShowDragons}
            >Dragons
          </button>
        </div>
      </div>
      <div id='main-body'>
        {showRockets ? <Rockets rockets={rockets} /> : null}
        {showDragons ? <Dragons /> : null}
      </div>
    </div>
  )
}

export default App
