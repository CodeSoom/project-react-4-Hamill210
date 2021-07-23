import { useSelector } from 'react-redux';

import GameList from './GameList';

export default function GameListContainer() {
  const { gameInfos, name } = useSelector((state) => ({
    gameInfos: state.games.gameInfos,
    name: state.player.summoner.name,
  }));

  return (
    <GameList gameInfos={gameInfos} summonerName={name} />
  );
}
