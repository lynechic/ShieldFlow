// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ShieldFlow title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ShieldFlow/i);
    expect(titleElement).toBeInTheDocument();
});
