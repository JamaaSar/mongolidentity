import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './style.module.css';



class Navbar extends React.Component {
    render() {
        console.log(window.location.href.indexOf("/aboutus/ourstory*"))

        return (
            <nav className={css.Navbar}>
                <NavLink style={({ isActive }) => ({ backgroundColor: isActive ? "#004ec2" : '' })} to='/' >Home</NavLink>
                {/* <NavLink style={({ isActive }) => ({ backgroundColor: isActive ? "#004ec2" : '' })} to='/mongolworld' >Mongol world</NavLink> */}
                <NavLink style={({ isActive }) => ({ backgroundColor: isActive ? "#004ec2" : '' })} to='/news' >News</NavLink>
                {/* <NavLink style={({ isActive }) => ({ backgroundColor: isActive ? "#004ec2" : '' })} to='resources/' >Resources</NavLink> */}
                <NavLink
                    style={({ isActive }) => ({
                        backgroundColor:
                            (window.location.href.indexOf("/aboutus/ourstory") !== -1 ||
                                window.location.href.indexOf("/aboutus/team") !== -1 ||
                                window.location.href.indexOf("/aboutus/team") !== -1)
                                ? "#004ec2" : ''
                    })}

                    to='/aboutus/ourstory' >

                    About us</NavLink>
            </nav>
        )
    }
}


export default Navbar;