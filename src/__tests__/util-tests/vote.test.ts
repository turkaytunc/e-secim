import { vote } from '../../util/vote';

describe('vote action handler', () => {
  it('hey', async () => {
    return vote('12345678900', '1', '123hh2321h3h').then((res) => expect(res.status).toBe(400));
  });
});
