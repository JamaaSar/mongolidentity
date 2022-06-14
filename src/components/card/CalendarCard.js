import React from 'react';
import css from './style.module.css';


const CalendarCard = ({ date, title, img, location }) => {
    console.log(img)
    return (
        <div className={css.calendarCardBody}>
            {location === 'online' && <button> online </button>}
            <div className={css.counter}>
                <p> 6 days left</p>
            </div>

            <div className={css.calendarCardFilter}></div>
            <div className={css.calendarDatetitle}>
                <p className={css.date}>{date}</p>
                <p className={css.title}>{title}</p>
            </div>
            {location !== 'online' &&
                <div className={css.location}>
                    <svg width="45" height="45" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3887 21.1695C11.1256 20.093 9.95486 18.9128 8.88867 17.6413C7.28867 15.7319 5.38867 12.8881 5.38867 10.1783C5.38725 7.3481 7.09292 4.79599 9.70974 3.71286C12.3266 2.62973 15.3387 3.22909 17.3407 5.23125C18.6571 6.54081 19.3946 8.32217 19.3887 10.1783C19.3887 12.8881 17.4887 15.7319 15.8887 17.6413C14.8225 18.9128 13.6517 20.093 12.3887 21.1695ZM12.3887 5.18229C9.62862 5.18559 7.39198 7.42045 7.38867 10.1783C7.38867 11.3434 7.91567 13.3608 10.4237 16.3594C11.0418 17.0968 11.6977 17.8019 12.3887 18.4717C13.0797 17.8027 13.7359 17.0986 14.3547 16.3624C16.8617 13.3598 17.3887 11.3424 17.3887 10.1783C17.3854 7.42045 15.1487 5.18559 12.3887 5.18229ZM12.3887 13.1759C10.7318 13.1759 9.38867 11.8338 9.38867 10.1783C9.38867 8.52277 10.7318 7.18069 12.3887 7.18069C14.0455 7.18069 15.3887 8.52277 15.3887 10.1783C15.3887 10.9733 15.0726 11.7358 14.51 12.2979C13.9474 12.8601 13.1843 13.1759 12.3887 13.1759Z" fill="white" />
                    </svg>
                    <span>{location}</span>
                </div>
            }
            <img className={css.calendarCardImg} src={img} />
        </div>
    )
}


export default CalendarCard;