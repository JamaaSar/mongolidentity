import React from 'react';
import css from './style.module.css';
import UpHeader from './UpHeader';

const Header = ({ bannerimg }) => {
    return (
        <div className={css.headerSeaction}>
            <UpHeader />
            <div className={css.banner}>
                <div></div>
                <h1>Mongol Identity</h1>
                <img src={bannerimg} className={css.bannerImg} alt="firstpage" />
            </div>
        </div>

    )
}


export default Header;