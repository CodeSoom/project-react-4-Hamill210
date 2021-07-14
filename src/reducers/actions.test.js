import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadSummoners,
  setSummoner,
} from './slice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./services/api');

describe('actions', () => {
  let store;

  describe('loadSummoners', () => {
    store = mockStore({
      summoner: {},
      soloRank: {},
      subRank: {},
    });

    it('dispatches setSummoner', async () => {
      await store.dispatch(loadSummoners('최하누리'));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setSummoner());
    });
  });
});
