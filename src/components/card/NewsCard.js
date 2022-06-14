import React from 'react';
import css from './style.module.css';


const NewsCard = ({ date, title, img }) => {
    return (
        <div className={css.newsCardBody}>
            <div className={css.newsCardFilter}></div>
            <div className={css.carddatetitle}>
                <p className={css.date}>{date}</p>
                <p className={css.title}>{title}</p>
            </div>
            <img className={css.newsCardImg} src={img} />
        </div>
    )
}


export default NewsCard;