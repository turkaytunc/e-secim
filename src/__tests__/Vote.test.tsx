import { render, cleanup, fireEvent, act } from '@testing-library/react';
import Vote from '../components/vote/Vote';
import { StoreProvider } from '../store/Store';

beforeEach(cleanup);
beforeAll(() => jest.spyOn(window, 'fetch'));
jest.useFakeTimers();

const candidates = [
  {
    adayNo: 1,
    adayAd: 'Atakan Ertürk',
  },
  {
    adayNo: 2,
    adayAd: 'Türkay Tunç',
  },
  {
    adayNo: 3,
    adayAd: 'Atakan Karaçalı',
  },
];
let voteResponseCode = '';
const setVoteResponseCode = jest.fn(() => (voteResponseCode = '200'));

const voteComp = (
  <StoreProvider>
    <Vote candidates={candidates} setVoteResponseCode={setVoteResponseCode} />
  </StoreProvider>
);

describe('<Vote/>', () => {
  it('should render without crash', () => {
    render(voteComp);
  });

  it('should find by test id', () => {
    const { getByTestId } = render(voteComp);
    expect(getByTestId('vote-input-action-1')).toBeTruthy();
    expect(getByTestId('vote-input-action-2')).toBeTruthy();
    expect(getByTestId('vote-input-action-3')).toBeTruthy();
  });

  it('should fire onChange event', () => {
    const { getByTestId } = render(voteComp);
    expect(getByTestId('vote-input-action-1')).not.toBeChecked();
    fireEvent.change(getByTestId('vote-input-action-1'), { target: { checked: true, value: '1' } });
    expect(getByTestId('vote-input-action-1')).toBeChecked();
  });

  it('should fire onClick event', async () => {
    const { getByTestId } = render(voteComp);
    (window.fetch as jest.Mock).mockResolvedValue({ status: 200 });
    fireEvent.change(getByTestId('vote-input-action-2'), { target: { checked: true, value: '2' } });
    fireEvent.click(getByTestId('vote-action'));

    await act(() => Promise.resolve());
  });

  it('should match candidate name Atakan', () => {
    const { getByTestId } = render(voteComp);
    expect(getByTestId('vote-input-action-2').parentElement?.innerHTML).toMatch(/Türkay/);
  });
});
