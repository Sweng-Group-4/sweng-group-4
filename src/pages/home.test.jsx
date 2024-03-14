import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './Home'; 

//Test ensures that the home screen loads up
describe('App Component', () => {
    test('Home page renders', () => {
      render(<App />);
      expect(screen.getByTestId('contentBox')).toBeInTheDocument();
    })})