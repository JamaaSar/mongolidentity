import React from 'react';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import NewsCard from './card/NewsCard';
import img from '../img/img.png'

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
const News = (props) => {
    const { style } = props;
    var settings = {
        slidesToShow: 3,
        centerPadding: 30,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        adaptiveHeight: true,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };
    return (
        <div className='section'>
            <h2 style={{ ...style, paddingLeft: "50px", paddingBottom: "30px" }}>News</h2>
            <Slider {...settings}>
                <NewsCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} />
                <NewsCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} />
                <NewsCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} />
                <NewsCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} />
                <NewsCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} />
                <NewsCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} />
            </Slider>
        </div>
    )
}


export default News;