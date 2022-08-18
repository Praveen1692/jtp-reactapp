import React from 'react'


function ChangeBackground() {
    const isBackgroundRed = true;


  return (

    <div className='my-component'>

<div className={isBackgroundRed ? 'background-red' : 'background-blue'} />

        


    </div>



  )
}

export default ChangeBackground