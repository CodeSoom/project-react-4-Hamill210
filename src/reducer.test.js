import reducer, {
  setPlayerName,
  setSummoner,
  setRanks,
} from './slice';

import SUMMONER from '../fixtures/summoner';
import USER_LEAGUE_INFOS from '../fixtures/ranks';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      player: {
        userName: '',
      },
      summoner: {},
      soloRank: {},
      subRank: {},
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });
      expect(state).toEqual(initialState);
    });
  });

  describe('setPlayerName', () => {
    it('changes player name', () => {
      const initialState = {
        player: {
          userName: '',
        },
      };
      const userName = '최하누리';
      const state = reducer(initialState, setPlayerName(userName));

      expect(state.player.userName).toEqual('최하누리');
    });
  });

  describe('setSummoner', () => {
    it('changes summoner information', () => {
      const initialState = {
        summoner: {},
      };

      const state = reducer(initialState, setSummoner(SUMMONER));

      expect(state.summoner.name).toEqual('최하누리');
    });
  });

  describe('setRanks', () => {
    it('changes rank information', () => {
      const initialState = {
        soloRank: {},
        subRank: {},
      };

      const state = reducer(initialState, setRanks(USER_LEAGUE_INFOS));

      expect(state.subRank.tier).toEqual(USER_LEAGUE_INFOS[0].tier);
      expect(state.soloRank.tier).toEqual(USER_LEAGUE_INFOS[1].tier);
    });
  });
});
