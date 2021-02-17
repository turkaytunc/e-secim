import { render, cleanup } from '@testing-library/react';
import FetchCandidates from '../components/fetch-candidates/FetchCandidates';

beforeEach(cleanup);

describe('<FetchCandidates/>', () => {
  it('should render without crash', () => {
    render(<FetchCandidates />);
  });
});
