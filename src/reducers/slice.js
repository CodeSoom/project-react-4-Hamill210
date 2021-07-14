import { createSlice } from '@reduxjs/toolkit';
import {
  fetchSummoners,
  fetchRanks,
} from '../services/api';

const { actions, reducer } = createSlice({
  name: 'players',
  initialState: {
    player: {
      userName: '',
    },
    summoner: {},
    soloRank: {},
    subRank: {},
  },
  reducers: {
    setPlayerName(state, { payload: userName }) {
      return {
        ...state,
        player: {
          userName,
        },
      };
    },
    setSummoner(state, { payload: summoner }) {
      return {
        ...state,
        summoner,
      };
    },
    setRanks(state, { payload: ranks }) {
      const [subRank, soloRank] = ranks;

      return {
        ...state,
        soloRank,
        subRank,
      };
    },
  },
});

export const {
  setPlayerName,
  setSummoner,
  setRanks,
} = actions;

export function loadSummoners(username) {
  return async (dispatch) => {
    const summoner = await fetchSummoners(username);
    dispatch(setSummoner(summoner));

    if (summoner) {
      const ranks = await fetchRanks(summoner.id);
      dispatch(setRanks(ranks));
    }
  };
}

export default reducer;
