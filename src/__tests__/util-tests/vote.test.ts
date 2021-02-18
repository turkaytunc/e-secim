import { vote } from '../../util/vote';
beforeAll(() => jest.spyOn(window, 'fetch'));

describe('vote action handler', () => {
  it('hey', async () => {
    (window.fetch as jest.Mock).mockResolvedValue({
      status: 400,
    });
    return vote('12345678900', '1', '123hh2321h3h').then((res) => expect(res.status).toBe(400));
  });
});
