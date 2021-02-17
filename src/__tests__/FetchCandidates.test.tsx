import { render, cleanup } from '@testing-library/react';
import FetchCandidates from '../components/fetch-candidates/FetchCandidates';

beforeEach(cleanup);

interface ICandidates {
  candidates: object[];
}

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

describe('<FetchCandidates/>', () => {
  it('should render without crash', () => {
    const { container } = render(<FetchCandidates />);
  });
});
