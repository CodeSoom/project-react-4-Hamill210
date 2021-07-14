import reducer, {
} from './slice';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      matchInfos: [],
      gameInfos: [],
    }

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });
      expect(state).toEqual(initialState);
    });
  });
});
