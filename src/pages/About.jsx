import React from 'react';
import './About.css'; 

const About = () => {
    //const backgroundImageUrl = 'https://images.unsplash.com/photo-1547103106-9a0e718bb2d2?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    //const backgroundImageUrl = 'https://plus.unsplash.com/premium_photo-1684949051297-341c40d039c6?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const backgroundImageUrl = 'https://images.unsplash.com/photo-1577139996275-6681fdc2165a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    
    return (
        <div className="about-container" style={{backgroundImage: `url(${backgroundImageUrl})`}}>
            <div className="orange-box">
                <div className="content">
                    <h1 className="title">About Us</h1>
                    <p className="description">
                        Lets meet the team:
                    </p>
                    {/* Add more content as needed */}
                </div>
            </div>
        </div>
    );
};

export default About;

