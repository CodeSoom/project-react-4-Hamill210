import { memo } from 'react';

import {
  SELECTED_TEAM,
} from '../../constant';

import GamePlayer from './GamePlayer';
import GameTypeInfo from './GameTypeInfo';

function GameList({ gameInfos, summonerName }) {
  if (gameInfos.length === 0) {
    return <></>;
  }

  return (
    gameInfos.map(({
      gameId, gameCreation, gameDuration, queueId, teams, participants, participantIdentities,
    }) => {
      const gameTime = gameDuration * 1000;
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
            <GameTypeInfo
              gameCreation={gameCreation}
              gameTime={gameTime}
              queueId={queueId}
              win={team.win}
            />
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
                <GamePlayer
                  participantIdentities={participantIdentities}
                  blueTeam
                />
              </div>
              <div>
                <GamePlayer
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

export default memo(GameList);
