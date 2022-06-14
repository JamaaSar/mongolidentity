import React from 'react';
import css from './style.module.css';


const BoardMemberCard = ({ img, name, span }) => {
    return (
        <div className={css.BoardMemberCard}>
            <img className={css.BoardMemberCardImg} src={img} />
            <div>
                <p>{name}</p>
                <span>{span}</span>
            </div>

            <p className='paragraph'>Uuganaa Ramsay is the founding Trustee of the Mongol Identity non-profit organization. She is an award-winning author, campaigner and advocate. Uuganaa writes and speaks widely on equality, diversity and inclusion</p>

        </div>
    )
}


export default BoardMemberCard;