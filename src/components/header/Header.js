import React from 'react';
import css from './style.module.css';
import homebanner from '../../Rectangle 5.png';
import Navbar from './Navbar';
import UpHeader from './UpHeader';

const Header = () => {
    return (
        <div className={css.headerSeaction}>
            <UpHeader />
            <div className={css.banner}>
                <div></div>
                <img src={homebanner} className={css.bannerImg} alt="firstpage" />
            </div>
            <Navbar />
        </div>

    )
}


export default Header;