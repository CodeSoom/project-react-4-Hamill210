import { createSlice } from '@reduxjs/toolkit';
import { fetchPlayerInfo } from './services/apis';

const { actions, reducer } = createSlice({
  name: 'players',
  initialState: {
    player: {
      userName: '',
    },
    summoner: {},
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
  },
});

export const {
  setPlayerName,
  setSummoner,
} = actions;

export function loadPlayerInfo(username) {
  return async (dispatch) => {
    const summoner = await fetchPlayerInfo(username);

    dispatch(setSummoner(summoner));
  };
}

export default reducer;
