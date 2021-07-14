import { useSelector } from 'react-redux';

import GameList from './GameList';

export default function GameListContainer() {
  const { gameInfos } = useSelector((state) => ({
    gameInfos: state.games.gameInfos,
  }));

  return (
    <GameList
      gameInfos={gameInfos}
    />
  );
}
