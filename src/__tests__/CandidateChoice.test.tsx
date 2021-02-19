import { render } from '@testing-library/react';
import CandidateChoice from '../components/vote/candidate-choice/CandidateChoice';

describe('<CandidateChoice />', () => {
  const setSelectedOption = jest.fn();
  it('should render without crash', async () => {
    const { getByTestId } = render(
      <CandidateChoice
        el={{ adayAd: 'ali', adayNo: 1 }}
        selectedOption={''}
        setSelectedOption={setSelectedOption}
        imgArr={[]}
      />
    );

    expect(getByTestId('vote-input-action-1')).not.toBeChecked();
  });
});
