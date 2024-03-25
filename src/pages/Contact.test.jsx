import React from 'react';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './Contact'; 

//Test ensures that the contact screen loads up
describe('App Component', () => {
    test('contact page renders', () => {
      render(<App />);
      expect(screen.getByTestId('contact')).toBeInTheDocument();
    })})