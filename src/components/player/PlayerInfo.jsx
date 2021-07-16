import { memo } from 'react';
import styled from '@emotion/styled';

const UserProfileContainer = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  padding: '30px',
  margin: '20px 0px',
  backgroundColor: 'whitesmoke',
  border: '1px solid rgb(222, 222, 222)',
  borderRadius: '10px',
});

function PlayerInfo({
  name,
  summonerLevel,
  soloRank,
  subRank,
}) {
  if (!name) {
    return (
      <p>소환사명을 검색해주세요.</p>
    );
  }

  return (
    <UserProfileContainer>
      <div>
        소환사명
        {' : '}
        {name}
      </div>
      <div>
        레벨
        {' : '}
        {summonerLevel}
      </div>
      <div>
        솔로랭크
        {' : '}
        {soloRank ? `${soloRank.tier} ${soloRank.rank} ${soloRank.leaguePoints}` : 'Unranked'}
      </div>
      {soloRank && (
        <div>
          전적
          {' : '}
          {soloRank ? `${soloRank.wins}승 ${soloRank.losses}패` : ''}
        </div>
      )}
      <div>
        자유랭크
        {' : '}
        {subRank ? `${subRank.tier} ${subRank.rank} ${subRank.leaguePoints}` : 'Unranked'}
      </div>
      {subRank && (
        <div>
          전적
          {' : '}
          {`${subRank.wins}승 ${subRank.losses}패`}
        </div>
      )}
    </UserProfileContainer>
  );
}

export default memo(PlayerInfo);
