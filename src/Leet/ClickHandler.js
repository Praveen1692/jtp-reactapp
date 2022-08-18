import React from 'react'

export default function ClickHandler() {
    const clickHandle=(event)=>{
        console.log("this is log j",event);

    }
  return (
    <div>
       <h1> ClickHandler </h1>
       <button onClick={clickHandle}>Action2</button>
    </div>
  )
}
