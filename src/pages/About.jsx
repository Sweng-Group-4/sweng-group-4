import React from 'react';
import './About.css'; 
import VincentImage from '../Vincent.png';
import boyImage from '../Boy.png';
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
            name: 'Brendan',
            description: 'Description of Brendan.',
            image: BrendanImage
        },

        {
            name: 'Zuzanna',
            description: 'Description of Zuzanna.',
            image: ZuzannaImage
        },
        {
            name: 'Oisin',
            description: 'Description of Oisin.',
            image: OisinImage
        },
        {
            name: 'Vincent',
            description: 'Description of Vincent.',
            image: VincentImage
        },
        {
            name: 'Shay',
            description: 'Description of Shay.',
            image: ShayImage
        },
         {
            name: 'Sean',
            description: 'Description of Sean.',
            image: SeanImage
        },
        {
            name: 'Julia',
            description: 'Description of Julia.',
            image: JuliaImage
        },
        
        {
            name: 'Alex',
            description: 'Description of Alex.',
            image: AlexImage
        },
        {
            name: 'Kate',
            description: 'Description of Kate.',
            image: KateImage
        },
        {
            name: 'Shivek',
            description: 'Description of Shivek.',
            image: ShivekImage
        },
        
        {
            name: 'Orson',
            description: 'Description of Orson.',
            image: boyImage
        }
    ];

    const topWorkers = workers.slice(0, 6); 
    const bottomWorkers = workers.slice(6); 
    
    return (
        <div className="about-container" style={{backgroundImage: `url(${backgroundImageUrl})`}}>
            <div className="orange-box">
                <div className="content">
                    <h1 className="title">About Us</h1>
                    <p className="description">
                        Let's meet the team:
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
