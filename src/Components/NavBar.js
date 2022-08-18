import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <NavLink className='index-link' to='/'>Index</NavLink>
                   
                </li>
                <li>
                <NavLink className='home-link' to='/home'>Home</NavLink>
                </li>
                
            </ul>
        </nav>


       
        
    </div>
  )
}

export default NavBar