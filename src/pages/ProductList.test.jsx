import React from 'react';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './ProductList'; 

//Test ensures that the product screen loads up
describe('App Component', () => {
    test('Home page renders', () => {
      render(<App />);
      expect(screen.getByTestId('productList')).toBeInTheDocument();
    })})