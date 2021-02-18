import { render, cleanup, fireEvent, queryByTestId } from '@testing-library/react';
import Vote from '../components/vote/Vote';
import { StoreProvider } from '../store/Store';

beforeEach(cleanup);

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

beforeEach(jest.clearAllMocks);

describe('<Vote/>', () => {
  it('should render without crash', () => {
    render(voteComp);
  });

  it('should find by test id', () => {
    const { queryAllByTestId } = render(voteComp);
    expect(queryAllByTestId('vote-input-action')[0]).toBeTruthy();
  });

  it('should fire onChange event', () => {
    const { queryAllByTestId } = render(voteComp);
    expect(queryAllByTestId('vote-input-action')[0]).not.toBeChecked();
    fireEvent.change(queryAllByTestId('vote-input-action')[0], { target: { checked: true, value: '1' } });
    expect(queryAllByTestId('vote-input-action')[0]).toBeChecked();
  });

  it('should fire onClick event', () => {
    const { getByTestId } = render(voteComp);
    fireEvent.click(getByTestId('vote-action'));
  });

  it('should match candidate name Atakan', () => {
    const { queryAllByTestId } = render(voteComp);
    expect(queryAllByTestId('vote-input-action')[0].parentElement?.innerHTML).toMatch(/Atakan/);
  });
});
