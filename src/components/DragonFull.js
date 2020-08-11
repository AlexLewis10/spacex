import React from 'react'

function DragonFull ( {
  name,
  height,
  payload,
  heatShield,
  fuel,
  fuel2,
  description,
  wikipedia,
  img2
}
) {

  return (
      <div className='full-view'>
        <p className='full-info'>{name}</p>
        <p className='full-info'>Height: {height}m</p>
        <p className='full-info'>Mass: {payload}kg</p>
        <p className='full-info'>Heat shield resistant to {heatShield}°C</p>
        <p className='full-info'>Fuel 1: {fuel}</p>
        <p className='full-info'>Fuel 2: {fuel2}</p>
        <p className='full-info'>Description: {description}</p>
        <a className='full-info' href={wikipedia}>Wiki</a>
        <img className='rocket-img' src={`${img2}`} alt={name}></img>
      </div>
  )
}

export default DragonFull