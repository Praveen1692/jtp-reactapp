import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'


const ACTION_TYPES={
    INCREMENT:'increment',
    DECREMENT:'decrement',
    RESET:'reset'
}

const initial=0;





function reducer(state,action) {
    switch(action.type){
        case ACTION_TYPES.INCREMENT:
            return {count:state.count+1}
        case ACTION_TYPES.DECREMENT:
            let newCount=state.count-1;
            if(newCount<=0) return{count:0};
            else return{count:newCount};
        case ACTION_TYPES.RESET:
            return {count:state.count=0};
        default:
            return state;
    }
  
}

export default function CountReducer(){
    const[state,dispatch]=useReducer(reducer,{count:0});
    const increment=()=>{
        dispatch({type:ACTION_TYPES.INCREMENT})
    }
    const decrement=()=>{
        dispatch({type:ACTION_TYPES.DECREMENT});
    }
    const reset=()=>{
        dispatch({type:ACTION_TYPES.RESET});
    }
    return(
        <div>
            <button id='decrement-btn' onClick={decrement}>-</button>
            
            <h1>{state.count}</h1>
            
            <button id='increment-btn' onClick={increment}>+</button>
            <button id='reset' onClick={reset}>Reset</button>

        </div>
    )
}
