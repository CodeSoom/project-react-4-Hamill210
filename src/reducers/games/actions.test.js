import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadMatches,
  setMatches
} from './slice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../services/api');

describe('actions', () => {
  let store;

  describe('loadMatches', () => {
    store = mockStore({
      matchInfos: [],
      gameInfos: [],
    });

    it('dispatches setMatches', async () => {
      const encryptedAccountId = 'y3yPqlhLAXVaWwWG6Qvd_XoKc-OYKVhMVmRnL8-jBPiS';
      await store.dispatch(loadMatches(encryptedAccountId));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setMatches());
    });
  });
});
