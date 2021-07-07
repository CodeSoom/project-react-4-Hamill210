import reducer, {
  setPlayerName,
  setSummoner,
} from './slice';

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

  describe('setSummoner', () => {
    it('changes summoner information', () => {
      const initialState = {
        summoner: {},
      };
      const summoner = {
        id: 'ROmqWcUq7lVH-iIBcatiskiO9leUlsD5SL9VQXkXPFO_Nw',
        accountId: 'EUIJaJrzXK_sB9qfTCL7eRPIAagzFh9K9esUkb2G1Vze',
        puuid: 'MBsxsPWzxruXkjSBghzf79BermZyogtFgrLgd7QJUS5iSXfYG2ovL7NA2yiOXNZGKdmSxZxzT9WgJQ',
        name: '최하누리',
        profileIconId: 4574,
        revisionDate: 1624691287000,
        summonerLevel: 289,
      };
      const state = reducer(initialState, setSummoner(summoner));

      expect(state.summoner.name).toEqual('최하누리');
    });
  });
});
