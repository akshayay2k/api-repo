import { render, screen } from '@testing-library/react';
import App from '../../App.js';

import { Component } from 'react';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading', { name: "API Automation Tool"});
  expect(linkElement).toBeInTheDocument();
});
