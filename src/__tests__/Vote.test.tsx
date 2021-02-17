import { render, cleanup } from '@testing-library/react';
import Vote from '../components/vote/Vote';

beforeEach(cleanup);

describe('<Vote/>', () => {
  it('should render without crash', () => {
    render(<Vote />);
  });
});
