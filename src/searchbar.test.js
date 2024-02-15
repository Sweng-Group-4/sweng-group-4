import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './searchbar'; 

describe('App Component', () => {
    // Test 1: checks if page renders
    test('Renders search-input and the title', () => {
        render(<App />);
        expect(screen.getByText('Image Search Engine')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Type something to search...'))
        
    })
    // Test 2: Checks if search was succesful
    test('displays results after a search', async () => {
        render(<App />);
        
        const searchInput = screen.getByPlaceholderText('Type something to search...');
        userEvent.type(searchInput, 'image of cat');
        fireEvent.submit(searchInput);
        
        const firstResult = await screen.findByText('Result 1');
        expect(firstResult).toBeInTheDocument()});
      
})