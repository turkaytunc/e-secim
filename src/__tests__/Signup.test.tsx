import { render, cleanup } from '@testing-library/react';
import Signup from '../components/signup/Signup';

beforeEach(cleanup);

describe('<Signup />', () => {
  it('should render without crash', () => {
    render(<Signup />);
  });
});
