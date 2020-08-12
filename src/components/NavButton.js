import React from 'react'
import './App.css'

function Navbar (props) {
   
  return (
  <div id='navbar'>
    <button 
      className='select-vehicle-btn'
      id={props.vehicle} 
      onClick={props.handleShowVehicle}>
      {props.vehicle}
    </button>
  </div>
  )
}

export default Navbar