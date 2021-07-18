import { memo } from 'react';
import styled from '@emotion/styled';

import GamePlayersItem from './GamePlayersItem';

const PlayersWrap = styled.div({
  width: '250px',
  height: '96px',
  alignSelf: 'center',
  fontSize: 0,
});

const TeamWrap = styled.div({
  float: 'left',
  width: '50%',
});

function GamePlayers({ participants, participantIdentities }) {
  const blueTeam = [1, 2, 3, 4, 5];
  const redTeam = [6, 7, 8, 9, 10];

  return (
    <PlayersWrap>
      <TeamWrap>
        {participantIdentities
          .filter(({ participantId }) => blueTeam.includes(participantId))
          .map((participantIdentity) => (
            <GamePlayersItem
              participants={participants}
              participantIdentity={participantIdentity}
            />
          ))}
      </TeamWrap>
      <TeamWrap>
        {participantIdentities
          .filter(({ participantId }) => redTeam.includes(participantId))
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
