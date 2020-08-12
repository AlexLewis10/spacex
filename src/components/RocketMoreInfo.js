import React from 'react'
import './RocketFull.css'

function RocketMoreInfo ({
  name, 
  height, 
  mass,
  engines, 
  fuel, 
  fuel2, 
  wikipedia, 
  description, 
  img2 
}) {

  return(
    <div className='full-view'>
      <p className='full-info'>{name}</p>
      <p className='full-info'>Height: {height}m</p>
      <p className='full-info'>Mass: {mass}kg</p>
      <p className='full-info'>Engine: {engines}</p>
      <p className='full-info'>Fuel 1: {fuel}</p>
      <p className='full-info'>Fuel 2: {fuel2}</p>
      <p className='full-info'>{description}</p>
      <a className='full-info' href={wikipedia}>Wiki</a>
      <img className='rocket-img' src={`${img2}`} alt={name}></img>
    </div>
  )
}

export default RocketMoreInfo