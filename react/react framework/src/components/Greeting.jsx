import React from 'react'

const Greeting = (props) => {
  return (
    <div className='main'>
    <div className='box'>
      <h3>{props.name}</h3>
      <p>{props.course}</p>
      <p>{props.marks}</p>
    </div>
    </div>
  )
}

export default Greeting