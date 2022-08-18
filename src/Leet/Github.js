import React from 'react'
import axios from "axios"
import { useEffect } from 'react'

const Github = () => {
    const geet=()=>{
        axios.get('https://api.github.com/users?since=xxx')
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error))
    }
    useEffect(()=>{
        geet();
    },[])
  return (
    <div className='user'>

    <h1>List Of Github User:</h1>

        
    </div>
  )
}

export default Github