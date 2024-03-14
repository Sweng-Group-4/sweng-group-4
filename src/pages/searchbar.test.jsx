import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './Searchbar'; 

describe('App Component', () => {
    test('Renders search-input and checks interaction', () => {
        render(<App />);

        // Check if the title 'Shutter Lens' loads
       // expect(screen.getByTestId('projectName')).toBeInTheDocument();

        // Check if the search bar appears
        const searchInput = screen.getByTestId('searchHere');
        expect(searchInput).toBeInTheDocument();

        // Simulate user typing into the input
        fireEvent.change(searchInput, { target: { value: 'test search' } });
        expect(searchInput.value).toBe('test search');

        // Simulate user clicking the search button
        const searchButton = screen.getByRole('button', { name: /🔍/ });
        fireEvent.click(searchButton);
    });
});
