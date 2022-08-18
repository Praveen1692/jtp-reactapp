import React from 'react'
import { useState } from 'react'

export default function ClickCounter() {
    const[count,setcount]=useState(0);
    const handleClick=()=>{
        setcount((c)=>c+1);
    }
  return (
    <div>
        <h1> Counter is - {count}</h1>
        <button onClick={handleClick}>Counter </button>
    </div>
  )
}
