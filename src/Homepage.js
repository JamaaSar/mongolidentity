import React from 'react';
import Calendar from './components/Calendar';
import Footer from './components/footer/Footer';
import Getinvolved from './components/getinvolved/Getinvolved';
import Header from './components/header/Header';
import Navbar from './components/header/Navbar';
import MongolworldCard from './components/mongolworld/MongolworldCard';
import News from './components/News';
import Team from './components/Team';
import Missionvision from './components/whoweare/Missionvision';


const Homepage = () => {

    return (
        <>
            <Header />
            <Missionvision />
            <MongolworldCard />
            <Calendar />
            <News />
            <Team />
            <Getinvolved />
            <Footer />
        </>
    );
};

export default Homepage;