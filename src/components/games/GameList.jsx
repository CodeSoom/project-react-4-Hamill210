import QUEUES from '../../constant/queues';
import {
  QUEUE_TYPE,
  getFormattedTimeDifference,
  VICTORY_OR_DEFEAT,
  SELECTED_TEAM,
} from '../../constant';

import Player from './Player';

function GameList({ gameInfos, summonerName }) {
  if (gameInfos.length === 0) {
    return <></>;
  }

  const now = new Date().getTime();

  return (
    gameInfos.map(({
      gameId, gameCreation, gameDuration, queueId, teams, participants, participantIdentities,
    }) => {
      const gameTime = gameDuration * 1000;
      const gamePlayTime = `${new Date(gameTime).getMinutes()}분 ${new Date(gameTime).getSeconds()}초`;

      const participantIdOfSummoner = participantIdentities
        .filter(({ player }) => (player.summonerName === summonerName))[0].participantId;
      const participantOfSummoner = participants
        .filter((participant) => (participant.participantId === participantIdOfSummoner))[0];
      const team = teams[SELECTED_TEAM[participantOfSummoner.teamId]];

      const {
        kills, deaths, assists, champLevel,
        totalMinionsKilled, neutralMinionsKilled,
      } = participantOfSummoner.stats;

      const totalMinions = totalMinionsKilled + neutralMinionsKilled;

      return (
        <div key={gameId}>
          <div>
            <div>
              <div>
                {QUEUE_TYPE[QUEUES.filter((queue) => queue.queueId === queueId)[0].description]}
              </div>
              <div>
                <span>
                  {getFormattedTimeDifference(now - (gameCreation + gameTime))}
                </span>
              </div>
              <div>
                {VICTORY_OR_DEFEAT[team.win]}
              </div>
              <div>{gamePlayTime}</div>
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
                  {totalMinions}
                  {' '}
                  {`(${((totalMinions) / new Date(gameTime).getMinutes()).toFixed(1)})`}
                </span>
                {' CS '}
              </div>
            </div>
            <div>
              <div>
                <Player
                  participantIdentities={participantIdentities}
                  blueTeam
                />
              </div>
              <div>
                <Player
                  participantIdentities={participantIdentities}
                  blueTeam={false}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }));
}

export default GameList;
