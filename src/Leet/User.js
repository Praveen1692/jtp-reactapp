import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const User = () => {
const[searchParams,setSearchParams] = useSearchParams();
const showActiveUsers=searchParams.get('filter')==='active';

  return (

    <div>

        <h2>User  1 </h2>
        <h2>User  2 </h2>
        <h2>User  3 </h2>
        <div>
          <button onClick={()=>setSearchParams({filter:'active'})}>Active User</button>
          <button onClick={()=>setSearchParams({})}>Reset Filter</button>
        </div>
        {
          showActiveUsers ? ( <h2>Showing Active User</h2>):(<h2>Showing All USers</h2>)
        }


    </div>




  )
}
