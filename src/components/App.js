import React, { useState }from 'react'
import Rocket from '../components/Rocket'
import Dragon from '../components/Dragon'

function App () {
  const [showRockets, setShowRockets] = useState(false)
  const [showDragons, setShowDragons] = useState(false)

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
      {showRockets ? <Rocket /> : null}
      {showDragons ? <Dragon /> : null}
    </div>
  )
}

export default App;
