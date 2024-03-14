import { render, screen } from '@testing-library/react';
import About from './About';

//test checks to see that all 11 images load up
test('About component renders all worker images', () => {
    render(<About />);

    const expectedWorkersCount = 11;
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(expectedWorkersCount);
});