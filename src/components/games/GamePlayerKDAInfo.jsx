import { memo } from 'react';
import styled from '@emotion/styled';
import { RED_FONT_COLOR } from '../../styles/colors';

const KDAWrap = styled.div({
  display: 'grid',
  fontSize: '11px',
  textAlign: 'center',
  margin: 'auto',
  height: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
});

const KDADiv = styled.div({
  color: '#879292',
  fontSize: '24px',
  whiteSpace: 'nowrap',
});

const KDACommon = {
  fontWeight: 'bold',
};

const KillAssistSpan = styled.span({
  ...KDACommon,
  color: '#555e5e',
});

const DeathSpan = styled.span({
  ...KDACommon,
  color: RED_FONT_COLOR,
});

const KDARatio = styled.div({
  ...KDACommon,
  color: '#555e5e',
  fontSize: '12px',
  marginTop: '6px',
});

const KDARatioSpan = styled.span({
  color: '#353a3a',
});

function GamePlayerKDAInfo({ stats }) {
  const { kills, deaths, assists } = stats;

  function getKillPercentOfRelation(kill, death, assist) {
    if (death > 0) {
      return `${((kill + assist) / death).toFixed(2)}:1`;
    }

    if (kill > 0 || assists > 0) {
      return 'Perfect';
    }

    return '0.00:1';
  }

  return (
    <KDAWrap>
      <KDADiv>
        <KillAssistSpan>{kills}</KillAssistSpan>
        {' / '}
        <DeathSpan>{deaths}</DeathSpan>
        {' / '}
        <KillAssistSpan>{assists}</KillAssistSpan>
      </KDADiv>
      <KDARatio>
        <KDARatioSpan>
          {getKillPercentOfRelation(kills, deaths, assists)}
        </KDARatioSpan>
        {' 평점 '}
      </KDARatio>
    </KDAWrap>
  );
}

export default memo(GamePlayerKDAInfo);
