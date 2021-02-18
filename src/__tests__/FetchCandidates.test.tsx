import { render, cleanup, act } from '@testing-library/react';
import FetchCandidates from '../components/fetch-candidates/FetchCandidates';

beforeEach(cleanup);
beforeAll(() => jest.spyOn(window, 'fetch'));

describe('<FetchCandidates/>', () => {
  it('should render without crash', async () => {
    render(<FetchCandidates />);

    await act(() => Promise.resolve());
  });
});
