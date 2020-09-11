import React from 'react'

function Goods (props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2> Welcome to my company</h2>
    </div>
  )
}

let newPerson = <Goods name = "Frank" />

export default Goods;