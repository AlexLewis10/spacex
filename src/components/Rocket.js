import React from 'react'
import './Vehicle.css'
import { Link } from 'react-scroll'

function Rocket (props) {

  const displayMoreInfo = () => {
    props.getFullRocketInfo(props.name)
  }

  return (
    <div style={{
      backgroundImage: `url(${props.img})`,
      backgroundSize: 'cover',
      }} 
      className='rocket'>
      <div className='rocket-info'> 
        <p>{props.name}</p>
        <p>Height: {props.height}m</p>
        <p>Mass: {props.mass}kg</p>
      </div>
      <Link 
        className='more-info' 
        to='react-scroll-target'
        smooth={true} 
        duration={1500} 
        onClick={displayMoreInfo}>
        More info
      </Link>
    </div>
  )
}

export default Rocket