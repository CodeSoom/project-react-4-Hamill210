import { combineReducers } from 'redux';

import player from './player/slice';
import games from './games/slice';

export default combineReducers({
  player,
  games,
});
