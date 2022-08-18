import React from 'react'
import { useReducer } from 'react';


const initialState=0;

function reducer(state,action){

    switch(action){
        case 'increment':
           return state+1;

        case 'decrement': 
            return state-1;
        case 'reset':
            return state=0;
        default:
            return state;
    }

}





function CounterOne() {
 const[count,dispatch]=useReducer(reducer,initialState);


  return (
    <div>

        <h1>Count is - {count}</h1>

        <button onClick={()=>dispatch('increment')}>Incremenet</button>
        <button onClick={()=>dispatch('decrement')}>Decremenet</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>



    </div>
  )
}

export default CounterOne;