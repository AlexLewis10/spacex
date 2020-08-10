import React from 'react'

function Rocket ({ 
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

  return (
    <div>
      <p>{name}</p>
      <p>{height}</p>
      <p>{mass}</p>
      <p>{engines}</p>
      <p>{fuel}</p>
      <p>{fuel2}</p>
      <p>{wikipedia}</p>
      <p>{description}</p>
      <p>{img1}</p>
      <p>{img2}</p>
    </div>
  )
}

export default Rocket