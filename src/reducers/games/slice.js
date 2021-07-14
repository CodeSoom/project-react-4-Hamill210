import { createSlice } from '@reduxjs/toolkit';
import {
  fetchMatchInfos,
} from '../../services/api';

const { actions, reducer } = createSlice({
  name: 'games',
  initialState: {
    matchInfos: [],
    gameInfos: [],
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
  },
});

export const {
  setMatchInfos,
  setGameInfo,
} = actions;

export function loadMatchInfos(encryptedAccountId) {
  return async (dispatch) => {
    const matchInfos = await fetchMatchInfos(encryptedAccountId);
    dispatch(setMatchInfos(matchInfos));
  };
}

export default reducer;
