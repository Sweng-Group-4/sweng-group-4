import React from 'react';
import './About.css'; 
import VincentImage from '../Vincent.png'; // Import the image
import girlImage from '../Girl.png';
import boyImage from '../Boy.png';


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
        name: 'Vincent',
        description: 'Description of Vincent.',
        image: VincentImage
    },
    {
        name: 'Kate',
        description: 'Description of Kate.',
        image: girlImage
    },
    {
        name: 'Michael',
        description: 'Description of Michael.',
        image: boyImage
    },
    {
        name: 'Emily',
        description: 'Description of Emily.',
        image: girlImage
    },
    {
        name: 'Daniel',
        description: 'Description of Daniel.',
        image: boyImage
    },
    {
        name: 'Sophia',
        description: 'Description of Sophia.',
        image: girlImage
    },
    {
        name: 'Jacob',
        description: 'Description of Jacob.',
        image: boyImage
    },
    {
        name: 'Olivia',
        description: 'Description of Olivia.',
        image: girlImage
    },
    {
        name: 'Ethan',
        description: 'Description of Ethan.',
        image: boyImage
    },
    {
        name: 'Natalie',
        description: 'Description of Natalie.',
        image: VincentImage 
    },
    {
        name: 'William',
        description: 'Description of William.',
        image: VincentImage 
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
