import { render, cleanup } from '@testing-library/react';
import Results from '../components/results/Results';
import 'jest-canvas-mock';

jest.mock('@reactchartjs/react-chart.js', () => ({
  Bar: () => null,
}));

beforeEach(cleanup);

describe('<Results />', () => {
  it('should render without crash', () => {
    render(<Results />);
  });
});
