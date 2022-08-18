import { useState } from "react"
import React from 'react'

export default function Message() {
    const[message,Setmessage]=useState('Welcome Visiter');
  return (
    <div>
       <h1> {message} </h1>
       <button onClick={()=>Setmessage('Thank You for subscrive')}>Action</button>
    </div>
  )
}
