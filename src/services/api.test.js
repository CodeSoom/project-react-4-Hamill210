import {
  fetchSummoners,
  fetchRanks,
  fetchMatchInfos,
  fetchGameInfo,
} from './api';

import SUMMONER from '../../fixtures/summoner';
import RANKS from '../../fixtures/ranks';
import MATCH_INFOS from '../../fixtures/matchInfos'
import GAME_INFOS from '../../fixtures/gameInfos'

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

  describe('fetchMatchInfos', () => {
    beforeEach(() => {
      mockFetch(MATCH_INFOS);
    });

    it('returns match list', async () => {
      const matches = await fetchMatchInfos();

      expect(matches).toEqual(MATCH_INFOS);
    });
  });

  describe('fetchGameInfos', () => {
    beforeEach(() => {
      mockFetch(GAME_INFOS);
    });

    it('returns game list', async () => {
      const matches = await fetchGameInfo();

      expect(matches).toEqual(GAME_INFOS);
    });
  });
});
