import React from 'react';

import Team from './components/Team';

import img from './img/img.png'
import TeamCard from './components/card/TeamCard';
import BoardMemberCard from './components/card/BoardMemberCard';

const Ourteam = () => {

    return (
        <>
            <div className='section'>
                <p style={{ paddingTop: "20px", paddingBottom: "20px" }} className='paragraph'>
                    Volunteers are the heartbeat of Mongol Identity. We want to thank our inspiring volunteers around the world for giving their time, talent and dedication.The benefits of volunteering can be enormous: volunteering offers vital help to people in need, to worthwhile causes and the community, but the benefits can be even greater for the volunteer.
                </p>

                <div className='boardMemberSection'>
                    <BoardMemberCard img={img} name='Uuganaa Ramsay' span='Founder' />
                    <BoardMemberCard img={img} name='Uuganaa Ramsay' span='Founder' />
                    <BoardMemberCard img={img} name='Uuganaa Ramsay' span='Founder' />
                    <BoardMemberCard img={img} name='Uuganaa Ramsay' span='Founder' />
                    <BoardMemberCard img={img} name='Uuganaa Ramsay' span='Founder' />
                </div>
                <h2 style={{ paddingTop: "50px", paddingLeft: "30px", paddingBottom: "20px" }}>Our Team</h2>
                <div className='ourteamPage'>
                    <TeamCard img={img} name='Uuganaa Ramsay' span='Founder' />
                    <TeamCard img={img} name='Uuganaa Ramsay' span='Founder' />
                    <TeamCard img={img} name='Uuganaa Ramsay' span='Founder' />
                    <TeamCard img={img} name='Uuganaa Ramsay' span='Founder' />
                    <TeamCard img={img} name='Uuganaa Ramsay' span='Founder' />
                    <TeamCard img={img} name='Uuganaa Ramsay' span='Founder' />

                </div>
            </div>

        </>
    );
};

export default Ourteam;