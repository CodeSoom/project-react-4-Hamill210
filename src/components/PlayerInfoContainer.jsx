import { useSelector } from 'react-redux';

import PlayerInfo from './PlayerInfo';

export default function PlayerInfoContainer() {
  const { name, summonerLevel } = useSelector((state) => ({
    name: state.summoner.name,
    summonerLevel: state.summoner.summonerLevel,
  }));

  return (
    <PlayerInfo
      name={name}
      summonerLevel={summonerLevel}
    />
  );
}
