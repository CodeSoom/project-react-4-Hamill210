import { useSelector } from 'react-redux';

import PlayerInfoContainer from './player/PlayerInfoContainer';
import GameListContainer from './games/GameListContainer';

function GameHistoryPage() {
  const { status } = useSelector((state) => ({
    status: state.player.summoner.status,
  }));

  if (status) {
    const statusCode = status.status_code;
    return (
      statusCode === 404 && (
        <h2>SOOM.GG에 등록되지 않은 소환사입니다. 오타를 확인 후 다시 검색해주세요.</h2>
      )
    );
  }

  return (
    <>
      <PlayerInfoContainer />
      <br />
      <GameListContainer />
    </>
  );
}

export default GameHistoryPage;
