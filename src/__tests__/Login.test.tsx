import { render, cleanup } from '@testing-library/react';
import Login from '../components/login/Login';
beforeEach(cleanup);

describe('<Login />', () => {
  it('should render without crash', () => {
    render(<Login />);
  });
});
