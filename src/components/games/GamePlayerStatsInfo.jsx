import { memo } from 'react';
import styled from '@emotion/styled';
import { RED_FONT_COLOR } from '../../styles/colors';
import { BLUE_TEAM_ID, RED_TEAM_ID } from '../../constant';

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
  color: RED_FONT_COLOR,
});

function GamePlayerStatsInfo({
  participants, stats, gameTime, teamId,
}) {
  function getTotalKill(players, id) {
    return players.reduce((cur, acc, i) => {
      if ((id === BLUE_TEAM_ID && i < 5) || (id === RED_TEAM_ID && i >= 5)) {
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
        {(kills + assists) > 0 && totalKill > 0
          ? (((kills + assists) / totalKill) * 100).toFixed(0)
          : '0'}
        %
      </KillConcernDiv>
    </StatsWrap>
  );
}

export default memo(GamePlayerStatsInfo);
