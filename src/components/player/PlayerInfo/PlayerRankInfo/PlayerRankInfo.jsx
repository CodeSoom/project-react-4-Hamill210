import { memo } from 'react';
import * as Styled from './style';

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
    <Styled.Div.Container>
      <Styled.Img.RankImage src={`/images/ranked-emblems/${tier}.png`} alt={tier} />
      <Styled.Div.RankContainer>
        <Styled.Div.RankContent>
          <Styled.Span.Title>{title}</Styled.Span.Title>
          <Styled.Span.Tier>{`${tier} ${rank}`}</Styled.Span.Tier>
          <Styled.Span.Point>{`${leaguePoints} LP`}</Styled.Span.Point>
          <Styled.Span.WinLose>{`${wins}승 ${losses}패`}</Styled.Span.WinLose>
        </Styled.Div.RankContent>
      </Styled.Div.RankContainer>
    </Styled.Div.Container>
  );
}

export default memo(PlayerRankInfo);
