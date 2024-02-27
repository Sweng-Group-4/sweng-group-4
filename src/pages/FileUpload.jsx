import React, { useState } from 'react';
import './fileUpload.css'; 
//background-image: url('https://as1.ftcdn.net/v2/jpg/07/09/99/14/1000_F_709991427_RKOkVz4jtaLq8EEoLPFpCaSWY5s6wUwV.jpg');

function App() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Image Analyzer</h1>
                <p>Upload an image to analyze its content</p>
            </header>
            <div className="background-image"></div> 
            <div className="app-content">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    data-testid="file-upload" 
                />
                {selectedFile && (
                    <div className="file-info">
                        <p>Selected File: {selectedFile.name}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
