import { useDispatch, useSelector } from 'react-redux';

import SearchBox from './SearchBox';

import {
  setPlayerName,
  initPlayerName,
  loadSummoners,
} from '../../reducers/player/slice';

export default function SearchBoxContainer() {
  const dispatch = useDispatch();

  const { userName } = useSelector((state) => ({
    userName: state.player.player.userName,
  }));

  function handleChangeValue(name) {
    dispatch(setPlayerName(name));
  }

  function handleClickSearchPlayer() {
    dispatch(loadSummoners(userName));
    dispatch(initPlayerName());
  }

  return (
    <SearchBox
      userName={userName}
      onChangeValue={handleChangeValue}
      onClickSearchPlayer={handleClickSearchPlayer}
    />
  );
}
