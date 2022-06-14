import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './style.module.css';



const NavbarButton = ({ text }) => {
    return (
        <div className={css.NavbarButton}>
            <NavLink exact={"true"} className="p-3 m-1" to='/' >{text}</NavLink>
        </div>
    )
}


export default NavbarButton;