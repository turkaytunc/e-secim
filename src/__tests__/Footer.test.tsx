import { render, cleanup } from '@testing-library/react';
import Footer from '../components/footer/Footer';

beforeEach(cleanup);

describe('<Footer/>', () => {
  it('renders footer component', () => {
    render(<Footer />);
  });
});
