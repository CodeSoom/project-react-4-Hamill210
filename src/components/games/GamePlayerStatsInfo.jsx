import { memo } from 'react';
import styled from '@emotion/styled';

const StatsWrap = styled.div({
  display: 'grid',
  margin: 'auto',
  height: 'auto',
  width: '120px',
  fontSize: '14px',
  textAlign: 'center',
  lineHeight: '22px',
  color: '#555e5e',
  justifyContent: 'center',
  alignItems: 'center',
});

const KillConcernDiv = styled.div({
  color: '#c6443e',
});

function GamePlayerStatsInfo({
  participants, stats, gameTime, teamId,
}) {
  function getTotalKill(players, id) {
    const isBlueTeam = id === 100;
    const isRedTeam = id === 200;

    return players.reduce((cur, acc, i) => {
      if ((isBlueTeam && i < 5) || (isRedTeam && i >= 5)) {
        return cur + acc.stats.kills;
      }

      return cur;
    }, 0);
  }

  const totalKill = getTotalKill(participants, teamId);
  const {
    kills, assists, champLevel, totalMinionsKilled, neutralMinionsKilled,
  } = stats;
  const totalMinions = totalMinionsKilled + neutralMinionsKilled;

  return (
    <StatsWrap>
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
      <KillConcernDiv>
        킬관여
        {' '}
        {(((kills + assists) / totalKill) * 100).toFixed(0)}
        %
      </KillConcernDiv>
    </StatsWrap>
  );
}

export default memo(GamePlayerStatsInfo);
