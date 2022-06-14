import React from 'react';
import css from './style.module.css';


const TeamCard = ({ img, name, span }) => {
    return (
        <div className={css.TeamCardBody}>
            <img className={css.TeamCardImg} src={img} />
            <div>
                <p>{name}</p>
                <span>{span}</span>
            </div>

        </div>
    )
}


export default TeamCard;