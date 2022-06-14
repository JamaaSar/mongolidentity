import React from 'react';
import Calendar from './components/Calendar';
import NewsCard from './components/card/NewsCard';
import Footer from './components/footer/Footer';
import Getinvolved from './components/getinvolved/Getinvolved';
import Header from './components/header/Header';
import Navbar from './components/header/Navbar';
import MongolworldCard from './components/mongolworld/MongolworldCard';
import News from './components/News';
import Team from './components/Team';
import Missionvision from './components/whoweare/Missionvision';
import newspage from './newspage.png';
import img from './img/img.png'


const NewsPage = () => {
    document.body.style.backgroundImage = "url('image url')";

    return (
        <>
            <Header bannerimg={newspage} />
            <Navbar />

            <div className='section'>
                <h2>News</h2>
                <p className='paragraph'>
                    Stay up date with the latest news about Mongols around the world. Filter the content by theme and language. If you’re interested in writing for our website, contact us.
                </p>
                <div className='newsPage'>
                    <NewsCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} />
                    <NewsCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} />
                    <NewsCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} />
                    <NewsCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} />
                    <NewsCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} />
                    <NewsCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} />
                    <NewsCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} />
                    <NewsCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} />
                    <NewsCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} />
                    <NewsCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} />
                    <NewsCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} />
                    <NewsCard date='2021/08/15' title='The Hu in the Super Bowel' img={img} />
                </div>


            </div>


        </>
    );
};

export default NewsPage;