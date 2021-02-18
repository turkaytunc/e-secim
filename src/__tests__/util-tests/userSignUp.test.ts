import { userSignUp } from '../../util/userSignUp';

beforeAll(() => jest.spyOn(window, 'fetch'));

describe('userSignUp function', () => {
  it('should signup successfully', async () => {
    (window.fetch as jest.Mock).mockReturnValue({ status: 200 });

    return userSignUp('12345678900', '12345').then((res) => expect(res.status).toBe(200));
  });
  it('should fail signup operation', async () => {
    (window.fetch as jest.Mock).mockReturnValue({ status: 400 });

    return userSignUp('', '').then((res) => expect(res.status).toBe(400));
  });
});
