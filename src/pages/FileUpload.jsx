import React, { useState } from 'react';
import './fileUpload.css'; 

function App() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState(''); // New state to track upload status

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setSelectedFile(file);
        uploadFile(file);
    };

    const uploadFile = (file) => {
        const formData = new FormData();
        formData.append('myFile', file);

        fetch('http://localhost:5000/uploadImg', {
            method: 'POST',
            body: formData,
        })
        .then(data => {
            console.log('Success:', data);
            setUploadStatus('success'); // Set uploadStatus to 'success' on successful upload
        })
        .catch((error) => {
            console.error('Error:', error);
            setUploadStatus('error'); // Optionally, set uploadStatus to 'error' on failure
        });
    };

    return (
        <div className="app-container" 
        style={{
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
            height: '100%',
        }}>
            <header className="app-header">
                <h1>Image Analyser</h1>
                <p>Upload an image to analyse its content</p>
            </header>
            <div className="background-image"></div> 
            <div className="app-content">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    data-testid="file-upload" 
                />
                <div className="file-info">
                    {uploadStatus === 'success' ? (
                        <p>Success</p>
                    ) : selectedFile ? (
                        <p>Selected File: {selectedFile.name}</p>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default App;
