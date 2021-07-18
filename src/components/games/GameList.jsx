import { memo } from 'react';
import styled from '@emotion/styled';

import {
  SELECTED_TEAM,
} from '../../constant';

import GamePlayer from './GamePlayer';
import GameTypeInfo from './GameTypeInfo';
import GamePlayerProfileInfo from './GamePlayerProfileInfo';
import GamePlayerKDAInfo from './GamePlayerKDAInfo';
import GamePlayerStatsInfo from './GamePlayerStatsInfo';
import GamePlayerInventory from './GamePlayerInventory';

const GameListContainer = styled.div({
  padding: '30px',
  border: '1px solid rgb(222, 222, 222)',
  borderRadius: '5px',
  backgroundColor: 'whitesmoke',
});

const GameItemWrap = styled.div({
  display: 'block',
  marginBottom: '10px',
});

const GameItemDiv = styled.div({
  display: 'grid',
  gridTemplateColumns: '100px 150px 150px 200px 200px 200px',
  border: '1px solid #cdd2d2',
  borderCollapse: 'collapse',
  width: '100%',
  backgroundColor: '#a3cfec',
  borderColor: '#99b9cf',
});

function GameList({ gameInfos, summonerName }) {
  if (gameInfos.length === 0) {
    return <></>;
  }

  return (
    <GameListContainer>
      <div>
        {gameInfos.map(({
          gameId, gameCreation, gameDuration, queueId, teams, participants, participantIdentities,
        }) => {
          const gameTime = gameDuration * 1000;
          const participantIdOfSummoner = participantIdentities
            .filter(({ player }) => (player.summonerName === summonerName))[0].participantId;
          const participantOfSummoner = participants
            .filter((participant) => (participant.participantId === participantIdOfSummoner))[0];
          const team = teams[SELECTED_TEAM[participantOfSummoner.teamId]];

          const { championId, spell1Id, spell2Id } = participantOfSummoner;
          const {
            perk0, perkSubStyle, perkPrimaryStyle,
          } = participantOfSummoner.stats;

          return (
            <GameItemWrap key={gameId}>
              <GameItemDiv>
                <GameTypeInfo
                  gameCreation={gameCreation}
                  gameTime={gameTime}
                  queueId={queueId}
                  win={team.win}
                />
                <GamePlayerProfileInfo
                  championId={championId}
                  leftSpell={spell1Id}
                  rightSpell={spell2Id}
                  perk0={perk0}
                  perkSubStyle={perkSubStyle}
                  perkPrimaryStyle={perkPrimaryStyle}
                />
                <GamePlayerKDAInfo
                  stats={participantOfSummoner.stats}
                />
                <GamePlayerStatsInfo
                  participants={participants}
                  stats={participantOfSummoner.stats}
                  gameTime={gameTime}
                  teamId={team.teamId}
                />
                <GamePlayerInventory
                  stats={participantOfSummoner.stats}
                />
                <div>
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
              </GameItemDiv>
            </GameItemWrap>
          );
        })}
      </div>
    </GameListContainer>
  );
}

export default memo(GameList);
