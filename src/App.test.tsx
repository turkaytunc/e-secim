import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Elektronik Seçim Uygulamasına Hoş Geldiniz./i);
  expect(linkElement).toBeInTheDocument();
});
