import React from 'react';
import AccomplishmentCard from './components/card/AccomplishmentCard';
import Missionvision from './components/whoweare/Missionvision';
import ten from './img/10.png'
import seventeen from './img/17.png'

import sixteen from './img/16.png'



const Whatwedocard = () => {
    return (
        <>
            <div className='section'>
                <p style={{ paddingBottom: "30px", paddingTop: "30px" }} className='paragraph'>
                    We are passionate about ensuring that our workshops and events are accessible to all and we campaign for human rights and dignity, equal opportunities and underrepresented voices.
                </p>
                <div className='whatwedo'>
                    <div className='whatwedocard' style={{ backgroundColor: "#004EC2" }}  >
                        <h4>
                            Medical
                        </h4>

                        <p >
                            Guidance for medical and health professionals
                            We urge medical practitioners to update their knowledge and their medical vocabulary in all print and online materials.
                            The International Classification of Diseases (ICD) is a globally used diagnostic tool and is maintained by the World Health Organization (WHO), which is the directing and coordinating authority for health within the United Nations System. We therefore expect all
                            professional organizations and their practices to follow the international guidelines.
                        </p>
                    </div>
                    <div className='whatwedocard' style={{ backgroundColor: "#34A853" }} >
                        <h4>
                            Education
                        </h4>
                        <p >
                            We have educational content to suit all ages and needs. Topics include:
                            Who Mongols are and their culture (history, fashion, tradition, food and many other topics)
                            How the history of race and science have influenced society today and the impact of language use in professional and cultural settings.
                            Through our training, people become more comfortable talking about the use of the word “Mongol”, learning to use the word in its authentic context.
                            Author events and curriculum-linked activities
                            Talks and film screening from artists & filmmakers
                            Performances & teaching dance, songs & music
                            Mongol language classes
                        </p>
                    </div>
                    <div className='whatwedocard' style={{ backgroundColor: "#FBBC05", }} >
                        <h4>
                            Social
                        </h4>
                        <p >
                            Guidance for medical and health professionals
                            We urge medical practitioners to update their knowledge and their medical vocabulary in all print and online materials.
                            The International Classification of Diseases (ICD) is a globally used diagnostic tool and is maintained by the World Health Organization (WHO), which is the directing and coordinating authority for health within the United Nations System. We therefore expect all
                            professional organizations and their practices to follow the international guidelines.
                        </p>
                    </div>
                    <div className='whatwedocard' style={{ backgroundColor: "#E86735", }} >
                        <h4>
                            Film & Media
                        </h4>
                        <p  >
                            Guidance for medical and health professionals
                            We urge medical practitioners to update their knowledge and their medical vocabulary in all print and online materials.
                            The International Classification of Diseases (ICD) is a globally used diagnostic tool and is maintained by the World Health Organization (WHO), which is the directing and coordinating authority for health within the United Nations System. We therefore expect all
                            professional organizations and their practices to follow the international guidelines.
                        </p>
                    </div>
                </div>
                <div>
                    <p style={{ paddingBottom: "20px", paddingTop: "60px" }} className='paragraph'>
                        Our purpose is to build trust in society and solve important problems, such as the global goals in the United Nations Sustainable Development Goals (SDGs).
                        As a nonprofit organisation, we contribute to them in a number of ways. Our work
                        focuses on primarily on the following goals and refer to the full list as a ‘sense check’ to make sure that we’re helping to contribute to all of the goals in some way.
                    </p>
                    <div className='sdggoal'>
                        <img style={{ width: "100px" }} src={ten} />
                        <img style={{ width: "100px" }} src={sixteen} />
                        <img style={{ width: "100px" }} src={seventeen} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Whatwedocard; 