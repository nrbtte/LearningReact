import React from "react";
import { Link, NavLink } from "react-router-dom";
import './NavBar.css'
const NavigationBar = () => {
    return(
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/gallery'>Gallery</Link>
        </nav>
    );
} 

const StyledNavigationBar = () => {
    const style = ({isActive}) => (isActive ? 'link active': 'link');
    return(
        <nav>
            <NavLink to='/' className={style}>Home</NavLink>
            <NavLink to='/about' className={style}>About</NavLink>
            <NavLink to='/gallery' className={style}>Gallery</NavLink>
        </nav>
    );
} 

export default StyledNavigationBar;