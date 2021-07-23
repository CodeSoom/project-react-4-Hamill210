import { useDispatch, useSelector } from 'react-redux';

import SearchBox from './SearchBox';

import {
  setPlayerName,
  initPlayerName,
  loadSummoners,
  setIsLoading,
} from '../../reducers/player/slice';

import { clearInfos } from '../../reducers/games/slice';

export default function SearchBoxContainer() {
  const dispatch = useDispatch();

  const { userName } = useSelector((state) => ({
    userName: state.player.player.userName,
  }));

  function handleChangeValue(name) {
    dispatch(setPlayerName(name));
  }

  function handleClickSearchPlayer() {
    dispatch(setIsLoading(true));
    dispatch(loadSummoners(userName));
    dispatch(initPlayerName());
    dispatch(clearInfos());
  }

  return (
    <SearchBox
      userName={userName}
      onChangeValue={handleChangeValue}
      onClickSearchPlayer={handleClickSearchPlayer}
    />
  );
}
