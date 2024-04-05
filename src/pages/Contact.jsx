import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './About.css'; 

const Contact = () => {
    const backgroundStyle = {
        backgroundImage: `url('https://th.bing.com/th/id/R.d51d24758620cb4a51489cbbe26a3662?rik=0qTzgUxn7QoOEw&pid=ImgRaw&r=0')`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '20px',
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    };

    const boxStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        padding: '20px',
        borderRadius: '10px', 
        boxShadow: '0 0 20px 5px rgba(255, 255, 255, 0.5)',
    };

    return (
        <div style={backgroundStyle}>
            <div className="contact-box" style={boxStyle} data-testid="contact">
                <h1>Contact Us</h1>
                <div style={{ marginTop: '20px' }}>
                <p>We'd love to hear from you.</p>
                <p>For further queries please email us at </p>
                <p>Email: <a href="mailto:team@jellyfish.ie">team@jellyfish.ie</a></p></div>
                <div style={{ marginTop: '20px' }}>
                    <a href="https://www.instagram.com/sswegroup4" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginRight: '10px' }}>
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com/sswegroup4" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginRight: '10px' }}>
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com/company/sswegroup4" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginRight: '10px' }}>
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
