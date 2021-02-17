import { render, cleanup } from '@testing-library/react';
import Homepage from '../components/homepage/Homepage';

beforeEach(cleanup);

describe('<Homepage/>', () => {
  it('should render without crash', () => {
    render(<Homepage />);
  });
});
