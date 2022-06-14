import React from 'react';
import NavbarButton from './NavbarButton';
import css from './style.module.css';



const Navbar = () => {
    return (
        <nav className={css.Navbar}>
            <NavbarButton text={'Home'} />
            <NavbarButton text={'Mongol world'} />
            <NavbarButton text={'News'} />
            <NavbarButton text={'Resources'} />
            <NavbarButton text={'About us'} />
        </nav>
    )
}


export default Navbar;