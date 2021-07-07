import reducer from './slice';

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
});
