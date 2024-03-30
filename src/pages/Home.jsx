import React from 'react';
import './Home.css';


const About = () => {
    //const backgroundImageUrl = 'https://images.unsplash.com/photo-1613374933062-7aa9f54036ce?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const backgroundImageUrl ='https://images.unsplash.com/photo-1531142590839-b096c1a9a7f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    return (
        <div className="about-container" style={{backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',}}>
            <div className="content-box" data-testid = "contentBox" style={{textAlign: 'center'}}>
                <h1 className="title">We are Jellyfish!</h1> {/* Add a title */}
                <p className="description" style={{textAlign: 'center'}}> 
                   Multilingual AI image Search Engine
                </p>
            </div>
        </div>
    );
};

export default About;

