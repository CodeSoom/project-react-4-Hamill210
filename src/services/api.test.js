import {
  fetchSummoners,
  fetchRanks,
  fetchMatches,
} from './api';

import SUMMONER from '../../fixtures/summoner';
import RANKS from '../../fixtures/ranks';
import MATCHES from '../../fixtures/matches'

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

  describe('fetchRanks', () => {
    beforeEach(() => {
      mockFetch(RANKS);
    });

    it('returns user league infomations', async () => {
      const summoner = await fetchRanks();

      expect(summoner).toEqual(RANKS);
    });
  });

  describe('fetchMatches', () => {
    beforeEach(() => {
      mockFetch(MATCHES);
    });

    it('returns match list', async () => {
      const matches = await fetchMatches();

      expect(matches).toEqual(MATCHES);
    });
  });
});
