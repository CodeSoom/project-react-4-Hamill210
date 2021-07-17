import { memo } from 'react';
import styled from '@emotion/styled';

import QUEUES from '../../constant/queues';
import {
  getFormattedTimeDifference,
  QUEUE_TYPE,
  VICTORY_OR_DEFEAT,
} from '../../constant';

const GameTypeWrap = styled.div({
  width: '70px',
  height: '96px',
  lineHeight: '16px',
  color: '#555',
  fontSize: '11px',
  textAlign: 'center',
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

const Bar = styled.div({
  display: 'block',
  width: '27px',
  height: '2px',
  margin: '5px auto',
  background: '#99b9cf',
});

const WinLoseWrap = styled.div({
  fontWeight: 'bold',
  color: '#1a78ae',
});

function GameTypeInfo({
  queueId, gameCreation, gameTime, win,
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
      <Bar />
      <WinLoseWrap>
        {VICTORY_OR_DEFEAT[win]}
      </WinLoseWrap>
      <div>
        {gamePlayTime}
      </div>
    </GameTypeWrap>
  );
}

export default memo(GameTypeInfo);
