import { memo } from 'react';
import styled from '@emotion/styled';

import GamePlayersItem from './GamePlayersItem';

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
  const blueTeamPlayerIds = [1, 2, 3, 4, 5];
  const redTeamPlayerIds = [6, 7, 8, 9, 10];

  return (
    <PlayersWrap>
      <TeamWrap>
        {participantIdentities
          .filter(({ participantId }) => blueTeamPlayerIds.includes(participantId))
          .map((participantIdentity) => (
            <GamePlayersItem
              participants={participants}
              participantIdentity={participantIdentity}
            />
          ))}
      </TeamWrap>
      <TeamWrap>
        {participantIdentities
          .filter(({ participantId }) => redTeamPlayerIds.includes(participantId))
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
