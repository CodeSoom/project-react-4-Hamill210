import { useSelector } from 'react-redux';

import PlayerInfo from './PlayerInfo';

export default function PlayerInfoContainer() {
  const {
    summoner,
    soloRank,
    subRank,
  } = useSelector((state) => ({
    summoner: state.player.summoner,
    soloRank: state.player.soloRank,
    subRank: state.player.subRank,
  }));

  return (
    <PlayerInfo
      summoner={summoner}
      soloRank={soloRank}
      subRank={subRank}
    />
  );
}
