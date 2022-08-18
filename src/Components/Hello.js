import React from 'react'

function Hello(props) {

  return (
    <div>
        <h1>Hello import {5*5} + {5+5} = {25+10} </h1>
        <h1>Hello {props.name}</h1>
        <h1>Herro Name {props.heroname}</h1>
    </div>
  )
}

export default  Hello;
