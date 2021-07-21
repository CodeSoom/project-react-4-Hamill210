import { memo } from 'react';
import styled from '@emotion/styled';

const RankBox = styled.div({
  display: 'inline-flex',
  margin: 'auto',
});

const RankImage = styled.img({
  height: '120px',
});

const RankDescriptionWrap = styled.div({
  alignSelf: 'center',
  textAlign: 'center',
});

const RankDescription = styled.div({
  display: 'grid',
});

const RankTitle = styled.span({
  marginBottom: '3px',
  color: 'rgb(100, 100, 100)',
  fontSize: '0.8em',
  fontWeight: '500',
});

const RankTier = styled.span({
  color: '#1f8ecd',
  fontSize: '1.2em',
  fontWeight: '900',
});

const RankPoint = styled.span({
  color: '#555e5e',
  fontWeight: 'bold',
});

const RankWinLose = styled.span({
  color: 'rgb(100, 100, 100)',
  fontSize: '0.8em',
  fontWeight: '500',
});

const defaultRanks = {
  tier: 'UNRANKED',
  rank: '',
  leaguePoints: 0,
  wins: 0,
  losses: 0,
};

function PlayerRankInfo({ ranks = defaultRanks, title }) {
  const {
    tier,
    rank,
    leaguePoints,
    wins,
    losses,
  } = ranks;

  return (
    <RankBox>
      <RankImage src={`/images/ranked-emblems/${tier}.png`} alt={tier} />
      <RankDescriptionWrap>
        <RankDescription>
          <RankTitle>{title}</RankTitle>
          <RankTier>{`${tier} ${rank}`}</RankTier>
          <RankPoint>{`${leaguePoints} LP`}</RankPoint>
          <RankWinLose>{`${wins}승 ${losses}패`}</RankWinLose>
        </RankDescription>
      </RankDescriptionWrap>
    </RankBox>
  );
}

export default memo(PlayerRankInfo);
