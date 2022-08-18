import { NavLink } from "react-router-dom"


export const NavBar=()=>{
    const navLinkStyles=({isActive})=>{
        return{
            fontWeight: isActive ? 'bold':'normal'
            

        }

    }
    return(
        <nav>
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} to='/about'>About</NavLink>
            <NavLink style={navLinkStyles} to='/product'>About Product</NavLink>
           

        </nav>
    )
} 