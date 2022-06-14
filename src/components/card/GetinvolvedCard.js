import React from 'react';
import css from './style.module.css';


const GetinvolvedCard = ({ img, name, span }) => {
    return (
        <div className={css.GetinvolvedCardBody}>
            <img className={css.GetinvolvedCardImg} src={img} />
            <div>
                <p>{name}</p>
                <span>{span}</span>
            </div>

        </div>
    )
}


export default GetinvolvedCard;