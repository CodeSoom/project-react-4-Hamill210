import { memo } from 'react';
import styled from '@emotion/styled';

const StatsWrap = styled.div({
  height: '96px',
  alignSelf: 'center',
  width: '90px',
  fontSize: '11px',
  textAlign: 'center',
  lineHeight: '18px',
  color: '#555e5e',
});

const KillConcernDiv = styled.div({
  color: '#c6443e',
});

function GamePlayerStatsInfo({
  participants, stats, gameTime, teamId,
}) {
  function getTotalKill(players, id) {
    return players.reduce((cur, acc, i) => {
      if (id === 100 ? i < 5 : i >= 5) {
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
