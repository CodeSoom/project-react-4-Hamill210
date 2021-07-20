import { memo } from 'react';
import styled from '@emotion/styled';

import GamePlayersItem from './GamePlayersItem';
import { BLUE_TEAM_PLAYER_IDS, RED_TEAM_PLAYER_IDS } from '../../constant';

const PlayersWrap = styled.div({
  display: 'flex',
  width: '274px',
  height: 'auto',
  fontSize: 0,
  alignItems: 'center',
  justifyContent: 'center',
});

const TeamWrap = styled.div({
  float: 'left',
  width: '50%',
});

function GamePlayers({ participants, participantIdentities }) {
  return (
    <PlayersWrap>
      <TeamWrap>
        {participantIdentities
          .filter(({ participantId }) => BLUE_TEAM_PLAYER_IDS.includes(participantId))
          .map((participantIdentity) => (
            <GamePlayersItem
              participants={participants}
              participantIdentity={participantIdentity}
            />
          ))}
      </TeamWrap>
      <TeamWrap>
        {participantIdentities
          .filter(({ participantId }) => RED_TEAM_PLAYER_IDS.includes(participantId))
          .map((participantIdentity) => (
            <GamePlayersItem
              participants={participants}
              participantIdentity={participantIdentity}
            />
          ))}
      </TeamWrap>
    </PlayersWrap>
  );
}

export default memo(GamePlayers);
