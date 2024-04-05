import React, { useState } from 'react';
import './fileUpload.css';
//i can push

function App() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [textualDescription, setTextualDescription] = useState('');
    const [uploadStatus, setUploadStatus] = useState('');
    const [error, setError] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        if (file) {
            setSelectedFile(file);
            if (!textualDescription.trim()) {
                setError('Please enter a textual description.'); // Set error if description is not entered
            } else {
                setError(''); // Clear error if both conditions are met
            }
        } else {
            setSelectedFile(null);
            setError('Please select a file.'); // Set error if file is not selected
        }
    };

    const handleDescriptionChange = (event) => {
        setTextualDescription(event.target.value);
        if (!event.target.value.trim() && selectedFile) {
            setError('Please enter a textual description.'); // Keep the error if description is empty and file is selected
        } else {
            setError(''); // Clear error if description is entered
        }
    };

    const handleUpload = () => {
        if (!selectedFile || !textualDescription.trim()) {
            setError(["You have not filled in all the required fields.", "Please select a file and enter a description."]);
            return;
        }
        uploadFile(selectedFile);
    };

    const uploadFile = (file) => {
        const formData = new FormData();
        formData.append('myFile', file);
        formData.append('description', textualDescription);

        fetch('http://localhost:5000/uploadImg', {
            method: 'POST',
            body: formData,
        })
        .then(data => {
            console.log('Success:', data);
            setUploadStatus('success');
            setError('');
        })
        .catch((error) => {
            console.error('Error:', error);
            setUploadStatus('error');
            setError('Error uploading file. Please try again.');
        });
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Image Analyser</h1>
                <p>Upload an image to analyse its content</p>
            </header>
            <div className="background-image"
            style={{
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
                height: '100%'
            }}>
                
            </div>
            <div className="app-content">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    data-testid="file-upload"
                />
                <input
                    type="text"
                    placeholder="Enter the image author..."
                    onChange={handleDescriptionChange}
                    value={textualDescription}
                    className="text-input"
                />
                {error && <p className="error-message">{error}</p>}
                {selectedFile && textualDescription.trim() && (
                    <button className="upload-button" onClick={handleUpload}>Upload</button>
                )}
                <div className="file-info">
                    {uploadStatus === 'success' ? (
                        <p>Upload Success</p>
                    ) : selectedFile ? (
                        <p>Selected File: {selectedFile.name}</p>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default App;
