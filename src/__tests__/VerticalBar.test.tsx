import { render, cleanup } from '@testing-library/react';
import VerticalBar, { IProps } from '../components/verticalBar/VerticalBar';
import 'jest-canvas-mock';
beforeEach(cleanup);

describe('<VerticalBar/>', () => {
  const verticalBarProps: IProps = {
    candidates: ['ali', 'veli'],
    voteData: [3, 5],
  };
  it('should render without crash', () => {
    render(<VerticalBar voteData={verticalBarProps.voteData} candidates={verticalBarProps.candidates} />);
  });
});
