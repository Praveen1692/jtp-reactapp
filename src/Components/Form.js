import React from 'react'
import { useState } from 'react'

export default function Form() {
    const[User_Name,SetUser_name]=useState('');


    const handleSubmit=(event)=>{
        event.preventDefault()
        alert(`Form Data is ${User_Name} `)


    }

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label>User_Name</label>
     <input type="text" value={User_Name} onChange={(event)=>SetUser_name(event.target.value)}></input>
     <br></br>
     <button type='submit'>Submit</button>
      <h1>Hello Form</h1>

      


    </div>
    </form>
  )
}
