import { memo } from 'react';
import styled from '@emotion/styled';

import QUEUES from '../../constant/queues';
import {
  getFormattedTimeDifference,
  QUEUE_TYPE,
  VICTORY_OR_DEFEAT,
} from '../../constant';
import {
  BLUE_BACKGROUND_COLOR,
  BLUE_FONT_COLOR, DRAW_BACKGROUND_COLOR, DRAW_FONT_COLOR,
  RED_BACKGROUND_COLOR,
  RED_FONT_COLOR,
} from '../../styles/colors';

const GameTypeWrap = styled.div({
  display: 'grid',
  width: '100px',
  height: 'auto',
  lineHeight: '22px',
  color: '#555',
  fontSize: '12px',
  textAlign: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
});

const QueueTypeWrap = styled.div({
  width: '70px',
  fontWeight: 'bold',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const GamePlayTimeWrap = styled.div({
  fontSize: 'inherit',
  cursor: 'help',
});

const Bar = styled.div(({ isWin, isDraw }) => {
  const commonStyles = {
    display: 'block',
    width: '27px',
    height: '2px',
    margin: '5px auto',
  };

  if (isDraw) {
    return {
      ...commonStyles,
      background: DRAW_BACKGROUND_COLOR.bar,
    };
  }

  return {
    ...commonStyles,
    background: isWin ? BLUE_BACKGROUND_COLOR.bar : RED_BACKGROUND_COLOR.bar,
  };
});

const WinLoseWrap = styled.div(({ isWin, isDraw }) => {
  const commonStyles = {
    fontWeight: 'bold',
  };

  if (isDraw) {
    return {
      ...commonStyles,
      color: DRAW_FONT_COLOR,
    };
  }

  return {
    ...commonStyles,
    color: isWin ? BLUE_FONT_COLOR : RED_FONT_COLOR,
  };
});

function GameTypeInfo({
  queueId, gameCreation, gameTime, win, isWin, isDraw,
}) {
  const now = new Date().getTime();
  const gamePlayTime = `${new Date(gameTime).getMinutes()}분 ${new Date(gameTime).getSeconds()}초`;

  return (
    <GameTypeWrap>
      <QueueTypeWrap>
        {QUEUE_TYPE[QUEUES.find((queue) => queue.queueId === queueId).description]}
      </QueueTypeWrap>
      <div>
        <GamePlayTimeWrap>
          {getFormattedTimeDifference(now - (gameCreation + gameTime))}
        </GamePlayTimeWrap>
      </div>
      <Bar isWin={isWin} isDraw={isDraw} />
      <WinLoseWrap isWin={isWin} isDraw={isDraw}>
        {isDraw ? '다시하기' : VICTORY_OR_DEFEAT[win]}
      </WinLoseWrap>
      <div>
        {gamePlayTime}
      </div>
    </GameTypeWrap>
  );
}

export default memo(GameTypeInfo);
