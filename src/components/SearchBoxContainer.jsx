import { useDispatch, useSelector } from 'react-redux';

import SearchBox from './SearchBox';

import {
  setPlayerName,
  loadSummoners,
} from '../slice';

export default function SearchBoxContainer() {
  const dispatch = useDispatch();

  const { userName } = useSelector((state) => ({
    userName: state.player.userName,
  }));

  function handleChangeInputValue(name) {
    dispatch(setPlayerName(name));
  }

  function handleClickSearchPlayer() {
    dispatch(loadSummoners(userName));
  }

  return (
    <SearchBox
      userName={userName}
      onChangeInputValue={handleChangeInputValue}
      onClickSearchPlayer={handleClickSearchPlayer}
    />
  );
}
