import reducer, { setPlayerName } from './slice';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      player: {
        userName: '',
      },
      summoner: {},
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
});
