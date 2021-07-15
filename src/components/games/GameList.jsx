import QUEUES from '../../constant/queues';
import { QUEUE_TYPE, getFormattedTimeDifference } from '../../constant';

function GameList({ gameInfos }) {
  if (gameInfos.length === 0) {
    return <></>;
  }

  const now = new Date().getTime();

  return (
    gameInfos.map(({
      gameId, gameCreation, gameDuration, queueId, participantIdentities,
    }) => (
      <div key={gameId}>
        <div>
          <div>
            <div>
              {QUEUE_TYPE[QUEUES.filter((queue) => queue.queueId === queueId)[0].description]}
            </div>
            <div>
              <span>
                {getFormattedTimeDifference(now - (gameCreation + (gameDuration * 1000)))}
              </span>
            </div>
            <div>패배</div>
            <div>34분 11초</div>
          </div>
          <div>
            <div>카밀</div>
          </div>
          <div>
            <div>
              <span>12</span>
              {' / '}
              <span>9</span>
              {' / '}
              <span>10</span>
            </div>
            <div>
              <span>2.44:1</span>
              {' 평점 '}
            </div>
          </div>
          <div>
            <div>레벨</div>
            <div>
              <span>181</span>
              {' CS '}
            </div>
          </div>
          <div>
            <div>
              <div>
                {participantIdentities
                  .filter(({ participantId }) => participantId < 5)
                  .map(({ participantId, player: { summonerName } }) => (
                    <div key={participantId}>
                      <a href="https://www.codesoom.com/">{summonerName}</a>
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <div>
                {participantIdentities
                  .filter(({ participantId }) => participantId >= 5)
                  .map(({ participantId, player: { summonerName } }) => (
                    <div key={participantId}>
                      <a href="https://www.codesoom.com/">{summonerName}</a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )));
}

export default GameList;
