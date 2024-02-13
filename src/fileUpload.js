import React, {useState} from 'react';
import './fileUpload.css';

function App() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const backgroundImageStyle = {
        backgroundImage: "url('https://images.unsplash.com/photo-1535408190508-be4c21946da6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Add the URL of your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="app-container" style={backgroundImageStyle}> {/* Apply inline style */}
            <header className="app-header">
                <h1>Image Analyzer</h1>
                <p>Upload an image to analyze its content</p>
            </header>
            <div className="app-content">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
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
