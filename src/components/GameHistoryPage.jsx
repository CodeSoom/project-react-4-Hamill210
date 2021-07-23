import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import ReactLoading from 'react-loading';

import PlayerInfoContainer from './player/PlayerInfoContainer';
import GameListContainer from './games/GameListContainer';
import { setIsLoading } from '../reducers/player/slice';

const LoadingContainer = styled.div({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '25em',
});

function GameHistoryPage() {
  const dispatch = useDispatch();

  const { status, isLoading } = useSelector((state) => ({
    status: state.player.summoner.status,
    isLoading: state.player.isLoading,
  }));

  useEffect(() => {
    setTimeout(() => dispatch(setIsLoading(false)), 1500);
  }, [isLoading]);

  if (status) {
    const statusCode = status.status_code;
    return (
      statusCode === 404 && (
        <h2>SOOM.GG에 등록되지 않은 소환사입니다. 오타를 확인 후 다시 검색해주세요.</h2>
      )
    );
  }

  return (
    isLoading
      ? (
        <LoadingContainer>
          <ReactLoading type="spin" color="#5383e8" />
        </LoadingContainer>
      )
      : (
        <>
          <PlayerInfoContainer />
          <br />
          <GameListContainer />
        </>
      )
  );
}

export default GameHistoryPage;
