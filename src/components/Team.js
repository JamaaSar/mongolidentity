import React from 'react';
import Slider from "react-slick";
import TeamCard from './card/TeamCard';
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
const Team = (props) => {
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
            <h2 style={{ ...style, paddingLeft: "20px", paddingBottom: "30px" }}>Our team</h2>
            <Slider {...settings}>
                <TeamCard img={img} name='Uuganaa Ramsay' span='Founder' />
                <TeamCard img={img} name='ulziisaikhan badamsed' span='Board member' />
                <TeamCard img={img} name='ulziisaikhan badamsed' span='Board member' />
                <TeamCard img={img} name='ulziisaikhan badamsed' span='Board member' />
                <TeamCard img={img} name='ulziisaikhan badamsed' span='Board member' />
            </Slider>
        </div>
    )
}


export default Team;