import QUEUES from '../../constant/queues';
import {
  QUEUE_TYPE,
  getFormattedTimeDifference,
  VICTORY_OR_DEFEAT,
} from '../../constant';

function GameList({ gameInfos, summonerName }) {
  if (gameInfos.length === 0) {
    return <></>;
  }

  const now = new Date().getTime();

  return (
    gameInfos.map(({
      gameId, gameCreation, gameDuration, queueId, teams, participants, participantIdentities,
    }) => {
      const participantIdOfSummoner = participantIdentities
        .filter(({ player }) => (player.summonerName === summonerName))[0].participantId;
      const participantOfSummoner = participants
        .filter((participant) => (participant.participantId === participantIdOfSummoner))[0];
      const team = participantOfSummoner.teamId === 100 ? teams[0] : teams[1];

      const {
        kills, deaths, assists, champLevel,
        totalMinionsKilled, neutralMinionsKilled,
      } = participantOfSummoner.stats;
      return (
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
              <div>
                {VICTORY_OR_DEFEAT[team.win]}
              </div>
              <div>34분 11초</div>
            </div>
            <div>
              <div>카밀</div>
            </div>
            <div>
              <div>
                <span>{kills}</span>
                {' / '}
                <span>{deaths}</span>
                {' / '}
                <span>{assists}</span>
              </div>
              <div>
                <span>
                  {((kills + assists) / deaths).toFixed(2)}
                  :1
                </span>
                {' 평점 '}
              </div>
            </div>
            <div>
              <div>
                레벨
                {' '}
                {champLevel}
              </div>
              <div>
                <span>
                  {totalMinionsKilled + neutralMinionsKilled}
                  {' '}
                </span>
                {' CS '}
              </div>
            </div>
            <div>
              <div>
                <div>
                  {participantIdentities
                    .filter(({ participantId }) => participantId < 5)
                    .map(({ participantId, player }) => (
                      <div key={participantId}>
                        <a href="https://www.codesoom.com/">{player.summonerName}</a>
                      </div>
                    ))}
                </div>
              </div>
              <div>
                <div>
                  {participantIdentities
                    .filter(({ participantId }) => participantId >= 5)
                    .map(({ participantId, player }) => (
                      <div key={participantId}>
                        <a href="https://www.codesoom.com/">{player.summonerName}</a>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }));
}

export default GameList;
