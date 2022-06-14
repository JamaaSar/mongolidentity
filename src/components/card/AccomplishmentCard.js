import React from 'react';
import css from './style.module.css';


const AccomplishmentCard = ({ img, name, span }) => {
    return (
        <div className={css.AccomplishmentCard}>
            <img className={css.AccomplishmentCardImg} src={img} />
            <div>
                <p>{name}</p>
                <span className='paragraph'>Uuganaa Ramsay is the founding Trustee of the Mongol Identity non-profit organization. She is an award-winning author, campaigner and advocate. Uuganaa writes and speaks widely on equality, diversity and inclusion</span>
            </div>



        </div>
    )
}


export default AccomplishmentCard;