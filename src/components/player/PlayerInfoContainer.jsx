import { useSelector } from 'react-redux';

import PlayerInfo from './PlayerInfo';

export default function PlayerInfoContainer() {
  const {
    name,
    summonerLevel,
    soloRank,
    subRank,
  } = useSelector((state) => ({
    name: state.summoner.name,
    summonerLevel: state.summoner.summonerLevel,
    soloRank: state.soloRank,
    subRank: state.subRank,
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
