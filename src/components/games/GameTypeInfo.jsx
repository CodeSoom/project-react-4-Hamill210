import { memo } from 'react';

import QUEUES from '../../constant/queues';
import {
  getFormattedTimeDifference,
  QUEUE_TYPE,
  VICTORY_OR_DEFEAT,
} from '../../constant';

function GameTypeInfo({
  queueId, gameCreation, gameTime, win,
}) {
  const now = new Date().getTime();
  const gamePlayTime = `${new Date(gameTime).getMinutes()}분 ${new Date(gameTime).getSeconds()}초`;

  return (
    <div>
      <div>
        {QUEUE_TYPE[QUEUES.find((queue) => queue.queueId === queueId).description]}
      </div>
      <div>
        <span>
          {getFormattedTimeDifference(now - (gameCreation + gameTime))}
        </span>
      </div>
      <div>
        {VICTORY_OR_DEFEAT[win]}
      </div>
      <div>
        {gamePlayTime}
      </div>
    </div>
  );
}

export default memo(GameTypeInfo);
