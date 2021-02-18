import { render, cleanup, fireEvent, act } from '@testing-library/react';
import Signup from '../components/signup/Signup';

beforeEach(cleanup);
beforeAll(() => jest.spyOn(window, 'fetch'));

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
    it('should fail signup and trigger error route', async () => {
      (window.fetch as jest.Mock).mockResolvedValue({
        status: 300,
      });

      const { getByTestId, container } = render(<Signup />);

      fireEvent.change(getByTestId('signup-tc-input'), { target: { value: '12345678900' } });
      fireEvent.change(getByTestId('signup-password-input'), { target: { value: '1234' } });
      fireEvent.click(getByTestId('signup-submit-button'));

      expect(container.innerHTML).toMatch(/Şifre minimum 5 karakter içermelidir!/i);

      await act(() => Promise.resolve());
    });
  });
});
