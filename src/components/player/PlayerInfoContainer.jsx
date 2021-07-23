import { useDispatch, useSelector } from 'react-redux';

import {
  initPlayerName,
  loadSummoners,
  setIsLoading,
} from '../../reducers/player/slice';
import { clearInfos } from '../../reducers/games/slice';

import PlayerInfo from './PlayerInfo';

export default function PlayerInfoContainer() {
  const dispatch = useDispatch();

  const {
    summoner,
    soloRank,
    subRank,
  } = useSelector((state) => ({
    summoner: state.player.summoner,
    soloRank: state.player.soloRank,
    subRank: state.player.subRank,
  }));

  const handleClickUpdateUserInfo = (summonerName) => {
    dispatch(setIsLoading(true));
    dispatch(loadSummoners(summonerName));
    dispatch(initPlayerName());
    dispatch(clearInfos());
  };

  return (
    <PlayerInfo
      summoner={summoner}
      soloRank={soloRank}
      subRank={subRank}
      onClickUpdateUserInfo={() => handleClickUpdateUserInfo(summoner.name)}
    />
  );
}
