import { createSlice } from '@reduxjs/toolkit';
import {
  fetchMatchInfos,
} from '../../services/api';

const initialInfos = {
  matchInfos: [],
  gameInfos: [],
};

const { actions, reducer } = createSlice({
  name: 'games',
  initialState: {
    ...initialInfos,
  },
  reducers: {
    setMatchInfos(state, { payload: matchInfos }) {
      return {
        ...state,
        matchInfos,
      };
    },
    setGameInfo(state, { payload: gameInfos }) {
      return {
        ...state,
        gameInfos,
      };
    },
    clearInfos(state) {
      return {
        ...state,
        ...initialInfos,
      };
    },
  },
});

export const {
  setMatchInfos,
  setGameInfo,
  clearInfos,
} = actions;

export function loadMatchInfos(encryptedAccountId) {
  return async (dispatch) => {
    const matchInfos = await fetchMatchInfos(encryptedAccountId);
    dispatch(setMatchInfos(matchInfos));
  };
}

export default reducer;
