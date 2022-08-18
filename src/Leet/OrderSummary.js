import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderSummary = () => {
    const ng=useNavigate();

  return (


    <div>
        
        Order Confirmed
        <button onClick={()=>ng(-1)}>GO back</button>
        
    </div>
  )
}
