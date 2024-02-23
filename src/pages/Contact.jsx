import React from 'react';

const Contact = () => {
    const backgroundStyle = {
        backgroundImage: `url('https://images.unsplash.com/photo-1534689358699-037f71a746e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '20px'
    };

    return (
        <div style={backgroundStyle}>
            <div>
                <h1>Contact Us</h1>
                <p>We'd love to hear from you. Send us a message!</p>
                {/* contact information */}
            </div>
        </div>
    );
};

export default Contact;
