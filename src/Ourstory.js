import React from 'react';
import Missionvision from './components/whoweare/Missionvision';


const Ourstory = () => {
    return (

        <div className='section' >
            <div>
                <iframe className='video' src='https://www.youtube.com/embed/NAaXUyfF8NQ'
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                />
            </div>
            <p style={{ paddingBottom: "30px" }} className="paragraph">Mongol Identity is a UK-based non-governmental and non-profit organisation committed to ending the historical misuse of the term “Mongol” through education and awareness-raising about the dignity, culture, and tradition of people of Mongol ethnicity.</p>

            <Missionvision />




        </div>
    );
};

export default Ourstory; 