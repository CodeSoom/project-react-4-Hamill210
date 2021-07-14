import { useSelector } from 'react-redux';

import PlayerInfo from './PlayerInfo';

export default function PlayerInfoContainer() {
  const {
    name,
    summonerLevel,
    soloRank,
    subRank,
  } = useSelector((state) => ({
    name: state.player.summoner.name,
    summonerLevel: state.player.summoner.summonerLevel,
    soloRank: state.player.soloRank,
    subRank: state.player.subRank,
  }));

  return (
    <PlayerInfo
      name={name}
      summonerLevel={summonerLevel}
      soloRank={soloRank}
      subRank={subRank}
    />
  );
}
