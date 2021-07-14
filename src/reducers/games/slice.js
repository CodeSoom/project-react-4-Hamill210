import { createSlice } from '@reduxjs/toolkit';
import {
  fetchMatches,
} from '../../services/api';

const { actions, reducer } = createSlice({
  name: 'games',
  initialState: {
    matchInfos: [],
    gameInfos: [],
  },
  reducers: {
    setMatches(state, { payload: matchInfos }) {
      return {
        ...state,
        matchInfos,
      };
    },
  },
});

export const {
  setMatches,
} = actions;

export function loadMatches(encryptedAccountId) {
  return async (dispatch) => {
    const matchInfos = await fetchMatches(encryptedAccountId);
    dispatch(setMatches(matchInfos));
  };
}

export default reducer;
