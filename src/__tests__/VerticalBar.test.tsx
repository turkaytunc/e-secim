import { render, cleanup } from '@testing-library/react';
import VerticalBar from '../components/verticalBar/VerticalBar';
import 'jest-canvas-mock';

jest.mock('@reactchartjs/react-chart.js', () => ({
  Bar: () => null,
}));

beforeEach(cleanup);

describe('<VerticalBar/>', () => {
  const verticalBarProps = {
    candidates: ['ali', 'veli'],
    voteData: [3, 5],
  };
  it('should render without crash', () => {
    render(<VerticalBar voteData={verticalBarProps.voteData} candidates={verticalBarProps.candidates} />);
  });
});
