import { memo } from 'react';
import styled from '@emotion/styled';

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
  color: '#c6443e',
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
          {((kills + assists) / deaths).toFixed(2)}
          :1
        </KDARatioSpan>
        {' 평점 '}
      </KDARatio>
    </KDAWrap>
  );
}

export default memo(GamePlayerKDAInfo);
