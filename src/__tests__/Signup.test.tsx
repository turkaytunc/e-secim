import { render, cleanup, fireEvent } from '@testing-library/react';
import Signup from '../components/signup/Signup';

beforeEach(cleanup);

describe('<Signup />', () => {
  describe('Succesful signup', () => {
    describe('TC input box', () => {
      it('should fire tc input change event', () => {
        const { queryByTestId, getByTestId } = render(<Signup />);
        expect(queryByTestId('signup-tc-input')).toBeTruthy();
        fireEvent.change(getByTestId('signup-tc-input'), { target: { value: '12345678900' } });
        expect(getByTestId('signup-tc-input')).toHaveValue('12345678900');
      });

      it('should fire on focus event', () => {
        const { queryByTestId, getByTestId } = render(<Signup />);
        expect(queryByTestId('signup-tc-input')).toBeTruthy();
        fireEvent.focus(getByTestId('signup-tc-input'));
        expect(getByTestId('signup-tc-input')).toHaveValue('');
      });
    });
    describe('Password input box', () => {
      it('should fire on change event', () => {
        const { queryByTestId, getByTestId } = render(<Signup />);
        expect(queryByTestId('signup-password-input')).toBeTruthy();
        fireEvent.change(getByTestId('signup-password-input'), { target: { value: '12345' } });
        expect(getByTestId('signup-password-input')).toHaveValue('12345');
      });

      it('should fire on focus event', () => {
        const { queryByTestId, getByTestId } = render(<Signup />);
        expect(queryByTestId('signup-password-input')).toBeTruthy();
        fireEvent.focus(getByTestId('signup-password-input'));
        expect(getByTestId('signup-password-input')).toHaveValue('');
      });
    });
  });

  describe('Failed signup', () => {
    it('should fail signup', () => {
      const { getByTestId } = render(<Signup />);
      fireEvent.change(getByTestId('signup-tc-input'), { target: { value: '222222222222' } });
      fireEvent.change(getByTestId('signup-password-input'), { target: { value: '' } });
      fireEvent.click(getByTestId('signup-submit-button'));
    });
  });
});
