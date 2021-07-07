import {
  fetchSummoners,
} from './api';

import SUMMONER from '../../fixtures/summoner';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('fetchSummoners', () => {
    beforeEach(() => {
      mockFetch(SUMMONER);
    });

    it('returns summoner', async () => {
      const summoner = await fetchSummoners();

      expect(summoner).toEqual(SUMMONER);
    });
  });
});