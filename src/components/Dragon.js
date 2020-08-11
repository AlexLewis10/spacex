import React from 'react'

function Dragon (props) {

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
      {/* <Link 
        className='more-info' 
        to='full' smooth={true} 
        duration={1500} onClick={displayFullView}>
        More info
      </Link> */}
    </div>
  )
}

export default Dragon