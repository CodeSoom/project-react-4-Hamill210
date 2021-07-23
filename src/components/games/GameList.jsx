import { memo } from 'react';
import styled from '@emotion/styled';

import {
  SELECTED_TEAM, SURRENDER_TIME,
} from '../../constant';

import GameTypeInfo from './GameTypeInfo';
import GamePlayerProfileInfo from './GamePlayerProfileInfo';
import GamePlayerKDAInfo from './GamePlayerKDAInfo';
import GamePlayerStatsInfo from './GamePlayerStatsInfo';
import GamePlayerInventory from './GamePlayerInventory';
import GamePlayers from './GamePlayers';
import {
  BLUE_BACKGROUND_COLOR,
  BLUE_BORDER_COLOR, DRAW_BACKGROUND_COLOR, DRAW_BORDER_COLOR,
  RED_BACKGROUND_COLOR,
  RED_BORDER_COLOR,
} from '../../styles/colors';

const GameListContainer = styled.div({
  padding: '30px',
  border: '1px solid rgb(222, 222, 222)',
  borderRadius: '10px',
  backgroundColor: 'whitesmoke',
});

const GameItemWrap = styled.div({
  display: 'block',
  marginBottom: '10px',
});

const GameItemDiv = styled.div(({ isWin, isDraw }) => {
  const commonStyles = {
    display: 'grid',
    gridTemplateColumns: '100px 174px 120px 120px 150px 274px',
    border: '1px solid #cdd2d2',
    borderCollapse: 'collapse',
    width: '100%',
  };

  if (isDraw) {
    return {
      ...commonStyles,
      backgroundColor: DRAW_BACKGROUND_COLOR.container,
      borderColor: DRAW_BORDER_COLOR,
    };
  }

  return {
    ...commonStyles,
    backgroundColor: isWin ? BLUE_BACKGROUND_COLOR.container : RED_BACKGROUND_COLOR.container,
    borderColor: isWin ? BLUE_BORDER_COLOR : RED_BORDER_COLOR,
  };
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
          const isWin = team.win === 'Win';
          const isDraw = gameDuration < SURRENDER_TIME;

          const { championId, spell1Id, spell2Id } = participantOfSummoner;
          const {
            perk0, perkSubStyle, perkPrimaryStyle,
          } = participantOfSummoner.stats;

          return (
            <GameItemWrap key={gameId}>
              <GameItemDiv isWin={isWin} isDraw={isDraw}>
                <GameTypeInfo
                  gameCreation={gameCreation}
                  gameTime={gameTime}
                  queueId={queueId}
                  win={team.win}
                  isWin={isWin}
                  isDraw={isDraw}
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
                  isWin={isWin}
                  isDraw={isDraw}
                  stats={participantOfSummoner.stats}
                />
                <GamePlayers
                  participants={participants}
                  participantIdentities={participantIdentities}
                />
              </GameItemDiv>
            </GameItemWrap>
          );
        })}
      </div>
    </GameListContainer>
  );
}

export default memo(GameList);
