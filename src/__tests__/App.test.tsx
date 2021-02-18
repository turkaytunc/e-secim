import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';

beforeEach(cleanup);

describe('<App/>', () => {
  it('renders component without crash', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('application')).toBeTruthy();
  });
});
