import { createSlice } from '@reduxjs/toolkit';

import {
  fetchSummoners,
  fetchRanks, fetchMatchInfos, fetchGameInfo,
} from '../../services/api';

import {
  setGameInfo,
  setMatchInfos,
} from '../games/slice';

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
    initPlayerName(state) {
      return {
        ...state,
        player: {
          userName: '',
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
      const soloRank = ranks.find(({ queueType }) => queueType === 'RANKED_SOLO_5x5');
      const subRank = ranks.find(({ queueType }) => queueType === 'RANKED_FLEX_SR');

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
  initPlayerName,
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

      const matchInfos = await fetchMatchInfos(summoner.accountId);
      dispatch(setMatchInfos(matchInfos));

      const fetchGameInfos = matchInfos.matches.map(({ gameId }) => fetchGameInfo(gameId));
      const gameInfos = await Promise.all(fetchGameInfos);
      dispatch(setGameInfo(gameInfos));
    }
  };
}

export default reducer;
