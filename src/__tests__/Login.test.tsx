import { render, cleanup, fireEvent, act } from '@testing-library/react';
import Login from '../components/login/Login';

beforeEach(cleanup);
beforeAll(() => jest.spyOn(window, 'fetch'));

describe('<Login />', () => {
  it('should render without crash', () => {
    render(<Login />);
  });

  describe('Succes input validation', () => {
    describe('TC input', () => {
      it('should find test element by given id', () => {
        const { queryByTestId } = render(<Login />);
        expect(queryByTestId('login-tc-input')).toBeTruthy();
      });

      it('should fire onChange event', () => {
        const { queryByTestId, getByTestId } = render(<Login />);
        expect(queryByTestId('login-tc-input')).toBeTruthy();
        fireEvent.change(getByTestId('login-tc-input'), { target: { value: '12345678900' } });
        expect(getByTestId('login-tc-input')).toHaveValue('12345678900');
      });
      it('should fire onFocus event', () => {
        const { queryByTestId, getByTestId } = render(<Login />);
        expect(queryByTestId('login-tc-input')).toBeTruthy();
        fireEvent.focus(getByTestId('login-tc-input'));
      });
    });

    describe('Password input', () => {
      it('should find test element by given id', () => {
        const { queryByTestId } = render(<Login />);
        expect(queryByTestId('login-password-input')).toBeTruthy();
      });

      it('should fire onChange event', () => {
        const { queryByTestId, getByTestId } = render(<Login />);
        expect(queryByTestId('login-password-input')).toBeTruthy();
        fireEvent.change(getByTestId('login-password-input'), { target: { value: '12345' } });
        expect(getByTestId('login-password-input')).toHaveValue('12345');
      });

      it('should fire onFocus event', () => {
        const { queryByTestId, getByTestId } = render(<Login />);
        expect(queryByTestId('login-password-input')).toBeTruthy();
        fireEvent.focus(getByTestId('login-password-input'));
      });
    });
  });

  describe('Failed input validation', () => {
    describe('TC input', () => {
      it('should fire onChange event', () => {
        const { queryByTestId, getByTestId } = render(<Login />);
        expect(queryByTestId('login-tc-input')).toBeTruthy();
        fireEvent.change(getByTestId('login-tc-input'), { target: { value: '1' } });
        expect(getByTestId('login-tc-input')).toHaveValue('1');
        fireEvent.click(getByTestId('login-submit-button'));
        expect(getByTestId('login-tc-input')).toHaveValue('');
      });
    });
    describe('Password input', () => {
      it('should fire onChange event', () => {
        const { queryByTestId, getByTestId } = render(<Login />);
        expect(queryByTestId('login-password-input')).toBeTruthy();
        fireEvent.change(getByTestId('login-password-input'), { target: { value: '1' } });
        expect(getByTestId('login-password-input')).toHaveValue('1');
        fireEvent.click(getByTestId('login-submit-button'));
        expect(getByTestId('login-password-input')).toHaveValue('');
      });
    });
  });

  describe('Validationstatus', () => {
    it('should test succesful login operation', async () => {
      const { getByTestId } = render(<Login />);

      (window.fetch as jest.Mock).mockResolvedValue({
        status: 200,
        json: () => Promise.resolve({ data: [{}] }),
      });

      fireEvent.change(getByTestId('login-tc-input'), { target: { value: '12345678999' } });
      fireEvent.change(getByTestId('login-password-input'), { target: { value: '123456' } });
      fireEvent.click(getByTestId('login-submit-button'));

      const setFunctionToSleep = async (ms: number): Promise<void> => {
        return new Promise((resolve) => setTimeout(resolve, ms));
      };
      await act(() => setFunctionToSleep(1000));
      expect(getByTestId('login-submit-button')).toBeTruthy();
    });
  });
});
