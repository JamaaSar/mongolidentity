import React from 'react';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import CalendarCard from './card/CalendarCard';
import img from '../img/cal.png'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

const Calendar = (props) => {
    const { style } = props;
    var settings = {
        slidesToShow: 3,
        centerPadding: 30,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        className: "slider variable-width",
        pauseOnHover: true,
        adaptiveHeight: true,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className='section'>
            <h2 style={{ ...style, paddingLeft: "50px", paddingBottom: "30px" }}>Calendar</h2>
            <Slider {...settings}>
                <CalendarCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} location='Mongolia' />
                <CalendarCard date='2021/08/15' title='Tsagaan sar' img={img} location='Mongolia' />
                <CalendarCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} location='online' />
                <CalendarCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} location='Mongolia' />
                <CalendarCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} location='Mongolia' />
                <CalendarCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} location='Mongolia' />
            </Slider>
        </div>
    )
}


export default Calendar;