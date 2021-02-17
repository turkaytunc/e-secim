import { render, cleanup, fireEvent } from '@testing-library/react';
import Vote from '../components/vote/Vote';
import { fetchCandidates } from '../util/fetchCandidates';

beforeEach(cleanup);
//jest.mock('../util/fetchCandidates', () => jest.fn());

describe('<Vote/>', () => {
  fetchCandidates();
  it('should render without crash', () => {
    render(<Vote candidates={[]} setVoteResponseCode={() => {}} />);
  });
  it('should fire select even', () => {
    const { queryByTestId, debug } = render(<Vote candidates={[]} setVoteResponseCode={() => {}} />);
    debug();
    expect(queryByTestId('vote-action')).toBeTruthy();
  });
});
