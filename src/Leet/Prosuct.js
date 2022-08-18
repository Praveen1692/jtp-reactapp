import React from 'react'

import { Link } from 'react-router-dom'

export const Prosuct = () => {
  return (
    <>    <div>
       <input type='search' placeholder='Enter Your Item' ></input>
    </div>

    <nav>
        <Link to='featured'>Featured</Link>
        <br />
        <Link to='new'>New</Link>

    </nav>


    </>

  )
}
