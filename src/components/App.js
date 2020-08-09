import React, { useState }from 'react'
import Rocket from '../components/Rocket'

function App () {
  const [showRockets, setShowRockets] = useState(false)

  const handleShowRockets = () => {
    setShowRockets(true)
  }

  return (
    <div>
      <h2>SpaceX</h2>
      <button id='Rockets' onClick={() => {handleShowRockets()}}>Rockets</button>
      {showRockets ? <Rocket /> : null}
    </div>
  )
}

export default App;
