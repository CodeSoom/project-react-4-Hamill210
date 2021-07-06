import reducer from './slice';

describe('reducer', () => {
  const initialState = {
  };

  it('returns initialState', () => {
    const state = reducer(undefined, { type: 'action' });

    expect(state).toEqual(initialState);
  });
});