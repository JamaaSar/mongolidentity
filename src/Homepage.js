import React from 'react';
import Calendar from './components/Calendar';
import Header from './components/header/Header';
import Navbar from './components/header/Navbar';
import MongolworldCard from './components/mongolworld/MongolworldCard';
import News from './components/News';
import Team from './components/Team';
import Missionvision from './components/whoweare/Missionvision';
import homebanner from './homepage.png';


const Homepage = () => {
    console.log(homebanner)
    document.body.style.backgroundImage = "url('image url')";

    return (
        <>
            <Header bannerimg={homebanner} />
            <Navbar />

            <Missionvision />
            <MongolworldCard />
            <Calendar />
            <News />
            <Team />
        </>
    );
};

export default Homepage;