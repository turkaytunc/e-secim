import { render, cleanup } from '@testing-library/react';
import RedirectVote from '../components/redirect-vote/RedirectVote';

beforeEach(cleanup);

describe('<RedirectVote />', () => {
  it('should render without crash', () => {
    render(<RedirectVote confirmed />);
  });

  it('should render without crash with red text', () => {
    render(<RedirectVote confirmed={false} />);
  });
});
