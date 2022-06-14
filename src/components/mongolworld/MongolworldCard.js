import React from 'react';
import css from './style.module.css';
import culture from '../../img/culture.png'
import art from '../../img/art.png'
import science from '../../img/science.png'
import education from '../../img/education.png'

const MongolworldCard = (props) => {
    const { style } = props;
    return (

        <div className='section'>
            <h2 style={{ ...style, paddingLeft: "30px", paddingBottom: "30px" }}> Mongol world</h2>
            <div className={css.subsection}>
                <div className={css.cardBody}>
                    <div className={css.cultureFilter}></div>
                    <h3 style={{ ...style, top: "63%", color: "#ffffff" }} >culture</h3>
                    <span className={css.fieldtext}>Since 1209</span>
                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5017 33.0496C7.8402 33.0396 0.0106102 25.6471 0 16.5248V16.1943C0.192399 7.11318 8.11134 -0.119021 17.7304 0.00148429C27.3496 0.12199 35.0625 7.55002 34.9996 16.6328C34.9368 25.7156 27.1217 33.0478 17.5017 33.0496ZM17.5017 3.30499C9.76899 3.30499 3.50035 9.22371 3.50035 16.5248C3.50035 23.8259 9.76899 29.7446 17.5017 29.7446C25.2345 29.7446 31.5031 23.8259 31.5031 16.5248C31.4945 9.2271 25.2309 3.31318 17.5017 3.30499ZM14.964 24.7872L12.4892 22.449L18.6761 16.6074L12.4892 10.7659L14.964 8.42767L23.6274 16.6074L14.9657 24.7872H14.964Z" fill="white" />
                    </svg>
                    <img src={culture} className={css.cardImg} alt="firstpage" />
                </div>
                <div className={css.cardBody}>
                    <div className={css.scienceFilter}></div>
                    <h3 style={{ ...style, top: "63%", color: "#ffffff" }} >science</h3>
                    <span className={css.fieldtext}>Since 1209</span>
                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5017 33.0496C7.8402 33.0396 0.0106102 25.6471 0 16.5248V16.1943C0.192399 7.11318 8.11134 -0.119021 17.7304 0.00148429C27.3496 0.12199 35.0625 7.55002 34.9996 16.6328C34.9368 25.7156 27.1217 33.0478 17.5017 33.0496ZM17.5017 3.30499C9.76899 3.30499 3.50035 9.22371 3.50035 16.5248C3.50035 23.8259 9.76899 29.7446 17.5017 29.7446C25.2345 29.7446 31.5031 23.8259 31.5031 16.5248C31.4945 9.2271 25.2309 3.31318 17.5017 3.30499ZM14.964 24.7872L12.4892 22.449L18.6761 16.6074L12.4892 10.7659L14.964 8.42767L23.6274 16.6074L14.9657 24.7872H14.964Z" fill="white" />
                    </svg>
                    <img src={science} className={css.cardImg} alt="firstpage" />
                </div>
            </div>
            <div className={css.subsection}>
                <div className={css.cardBody}>
                    <div className={css.artFilter}></div>
                    <h3 style={{ ...style, top: "63%", color: "#ffffff" }} >art</h3>
                    <span className={css.fieldtext}>Since 1209</span>
                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5017 33.0496C7.8402 33.0396 0.0106102 25.6471 0 16.5248V16.1943C0.192399 7.11318 8.11134 -0.119021 17.7304 0.00148429C27.3496 0.12199 35.0625 7.55002 34.9996 16.6328C34.9368 25.7156 27.1217 33.0478 17.5017 33.0496ZM17.5017 3.30499C9.76899 3.30499 3.50035 9.22371 3.50035 16.5248C3.50035 23.8259 9.76899 29.7446 17.5017 29.7446C25.2345 29.7446 31.5031 23.8259 31.5031 16.5248C31.4945 9.2271 25.2309 3.31318 17.5017 3.30499ZM14.964 24.7872L12.4892 22.449L18.6761 16.6074L12.4892 10.7659L14.964 8.42767L23.6274 16.6074L14.9657 24.7872H14.964Z" fill="white" />
                    </svg>
                    <img src={art} className={css.cardImg} alt="firstpage" />
                </div>
                <div className={css.cardBody}>
                    <div className={css.educationFilter}></div>
                    <h3 style={{ ...style, top: "63%", color: "#ffffff" }} >education</h3>
                    <span className={css.fieldtext}>Since 1209</span>
                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5017 33.0496C7.8402 33.0396 0.0106102 25.6471 0 16.5248V16.1943C0.192399 7.11318 8.11134 -0.119021 17.7304 0.00148429C27.3496 0.12199 35.0625 7.55002 34.9996 16.6328C34.9368 25.7156 27.1217 33.0478 17.5017 33.0496ZM17.5017 3.30499C9.76899 3.30499 3.50035 9.22371 3.50035 16.5248C3.50035 23.8259 9.76899 29.7446 17.5017 29.7446C25.2345 29.7446 31.5031 23.8259 31.5031 16.5248C31.4945 9.2271 25.2309 3.31318 17.5017 3.30499ZM14.964 24.7872L12.4892 22.449L18.6761 16.6074L12.4892 10.7659L14.964 8.42767L23.6274 16.6074L14.9657 24.7872H14.964Z" fill="white" />
                    </svg>
                    <img src={education} className={css.cardImg} alt="firstpage" />
                </div>
            </div>
        </div >

    )
}


export default MongolworldCard;