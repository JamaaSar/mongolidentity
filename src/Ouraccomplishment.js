import React from 'react';
import AccomplishmentCard from './components/card/AccomplishmentCard';
import Missionvision from './components/whoweare/Missionvision';
import img from './img/accomp.png'


const Ouraccomplishment = () => {
    return (
        <>
            <div className='section'>
                <p style={{ paddingBottom: "20px", paddingTop: "20px" }} className='paragraph'>
                    Mongol Identity represents a diverse global network of more than 45 members across the globe, supporting millions of Mongols and their dignity internationally. Through public campaigns, influencing decision makers Mongol Identity serves the communities worldwide. Here are some achievements from the past which we are particularly proud:
                </p>
                <div className='boardMemberSection'>
                    <AccomplishmentCard img={img} name='Uuganaa Ramsay' span='Founder' />
                    <AccomplishmentCard img={img} name='Uuganaa Ramsay' span='Founder' />
                    <AccomplishmentCard img={img} name='Uuganaa Ramsay' span='Founder' />
                    <AccomplishmentCard img={img} name='Uuganaa Ramsay' span='Founder' />
                    <AccomplishmentCard img={img} name='Uuganaa Ramsay' span='Founder' />
                </div>

            </div>
        </>
    );
};

export default Ouraccomplishment; 