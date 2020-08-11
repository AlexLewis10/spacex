import React from 'react'
import './RocketFull.css'

function RocketFull ({
  name, 
  height, 
  mass,
  engines, 
  fuel, 
  fuel2, 
  wikipedia, 
  description, 
  img1, 
  img2 
}) {

  return(
    <div className='full-view'>
      <p className='full-info'>Name: {name}</p>
      <p className='full-info'>Height: {height}m</p>
      <p className='full-info'>Mass: {mass}kg</p>
      <p className='full-info'>Engine: {engines}</p>
      <p className='full-info'>Fuel 1: {fuel}</p>
      <p className='full-info'>Fuel 2: {fuel2}</p>
      <p className='full-info'>Description{description}</p>
      <p className='full-info'>More info: {wikipedia}</p>
      {/* <p className='full-info'>>{img1}</p>
      <p className='full-info'>>{img2}</p> */}
    </div>
  )
}

export default RocketFull