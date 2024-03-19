import React from 'react';
import './About.css'; 
import VincentImage from '../Vincent.png';
import OrsonImage from '../Orson.png';
import JuliaImage from '../Julia.png';
import BrendanImage from '../Brendan.png';
import AlexImage from '../Alex.png';
import KateImage from '../Kate.png';
import OisinImage from '../Oisin.png';
import ShayImage from '../Shay.png';
import ShivekImage from '../Shivek.png';
import ZuzannaImage from '../Zuzanna.png';
import SeanImage from '../Sean.png';

const Worker = ({ name, description, image }) => (
    <div className="worker">
        <img className="headshot" src={image} alt={`${name}'s headshot`} />
        <p className="name">{name}</p>
        <p className="worker-description">{description}</p>
    </div>
);

const About = () => {
    const backgroundImageUrl = 'https://images.unsplash.com/photo-1577139996275-6681fdc2165a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    
    const workers = [
        {
            name: 'Brendan McCann',
            description: 'Team Lead - 3rd Year',
            image: BrendanImage
        },

        {
            name: 'Anthony Gavril',
            description: 'Translation Lead - 3rd Year',
            image: OisinImage
        },
        {
            name: 'Sean Andrews',
            description: 'Unit Testing - 3rd Year',
            image: SeanImage
        },
        {
            name: 'Vincent Mgbemena',
            description: 'Frontend Lead - 3rd Year',
            image: VincentImage
        },
        {
            name: 'Zuzanna Jerat',
            description: 'Backend Lead - 3rd Year',
            image: ZuzannaImage
        },
        {
            name: 'Shay McDonnell',
            description: 'Backend Lead - 3rd year',
            image: ShayImage
        },
        {
            name: 'Orson O Sullivan',
            description: 'Translation Dev- 2nd Year',
            image: OrsonImage
        },
        {
            name: 'Alex McHugh',
            description: 'AI Dev - 2nd Year',
            image: AlexImage
        },
        {
            name: 'Kate Burke',
            description: 'Frontend Dev- 2nd Year',
            image: KateImage
        },
        { 
            name: 'Shivek Agarwal',
            description: 'Frontend Dev- 2nd Year',
            image: ShivekImage
        },
        {
            name: 'Julia Nash',
            description: 'Backend Dev- 2nd Year',
            image: JuliaImage
        },
        
    ];

    workers[7].description = "AI recognition";

    const topWorkers = workers.slice(0, 6); 
    const bottomWorkers = workers.slice(6); 
    
    return (
        <div className="about-container" style={{backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        zIndex: -1,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%', }}>
            <div className="orange-box">
                <div className="content" style={{ padding: 0 }}>
                    <h1 className="title">About Us</h1>
                    <p className="description">
                        Meet the team:
                    </p>
                    <div className="top-workers">
                        {topWorkers.map((worker, index) => (
                            <Worker
                                key={index}
                                name={worker.name}
                                description={worker.description}
                                image={worker.image}
                            />
                        ))}
                    </div>
                    <div className="bottom-workers">
                        {bottomWorkers.map((worker, index) => (
                            <Worker
                                key={index}
                                name={worker.name}
                                description={worker.description}
                                image={worker.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
