import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './fileUpload'; 
// Test 1: Checks if Image Analyzer header Renders
describe('App Component', () => {
  test('renders Image Analyzer header', () => {
    render(<App />);
    expect(screen.getByText(/Image Analyzer/i)).toBeInTheDocument();
  });
// Test 2: Checks if user cam upload a file
  test('allows the user to upload a file', () => {
    render(<App />);
 
    const file = new File(['Cat'], 'Cat.png', { type: 'image/png' });
    const fileInput = screen.getByTestId('file-upload');
    fireEvent.change(fileInput, { target: { files: [file] } });
  
    expect(screen.getByText(`Selected File: ${file.name}`)).toBeInTheDocument();
  });
  
  
});