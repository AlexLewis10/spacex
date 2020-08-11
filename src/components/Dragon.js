import React from 'react'
import { Link } from 'react-scroll'

function Dragon (props) {

  const displayFullView = () => {
    props.getFullDragonInfo(props.name)
  }

  return (
    <div style={{
      backgroundImage: `url(${props.img})`,
      backgroundSize: 'cover',
    }} 
      className='rocket'>
      <div className='rocket-info'>
        <p >{props.name}</p>
        <p >Height: {props.height}m</p>
        <p >Payload: {props.payload}kg</p>
      </div>
      <Link 
        className='more-info' 
        to='full' smooth={true} 
        duration={1500} onClick={displayFullView}>
        More info
      </Link>
    </div>
  )
}

export default Dragon