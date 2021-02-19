import { render, cleanup, act } from '@testing-library/react';
import Results from '../components/results/Results';
import 'jest-canvas-mock';

jest.mock('@reactchartjs/react-chart.js', () => ({
  Bar: () => null,
}));

jest.useFakeTimers();

beforeEach(cleanup);
beforeAll(() => jest.spyOn(window, 'fetch'));

describe('<Results />', () => {
  it('should render without crash', async () => {
    (window.fetch as jest.Mock).mockResolvedValue({ json: () => Promise.resolve([]) });
    const { getByTestId } = render(<Results />);

    setTimeout(() => {}, 6000);

    jest.runAllTimers();

    await act(() => Promise.resolve());
  });
});
