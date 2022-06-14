import React from 'react';

import Header from './components/header/Header';

import newspage from './newspage.png';
import { NavLink, Outlet } from 'react-router-dom';


class AboutusPage extends React.Component {
    render() {
        return (
            <>
                <Header bannerimg={newspage} />
                <nav className='subnavigation'>
                    <NavLink style={({ isActive }) => ({})} to='/aboutus/ourstory' ><div />Our story</NavLink>
                    <NavLink style={({ isActive }) => ({})} to='/aboutus/accomplishments' > <div /> Our accomplishment  </NavLink>
                    <NavLink style={({ isActive }) => ({})} to='/aboutus/whatwedo' >    <div /> What we do</NavLink>
                    <NavLink style={({ isActive }) => ({})} to='/aboutus/team' >    <div /> Our team</NavLink>

                </nav>
                <Outlet />
            </>
        );
    }
};

export default AboutusPage;