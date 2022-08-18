import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
 const params= useParams();
 const useId=params.useId;


  return (

    <div>


        Details About User {useId}




    </div>
  )
}
