import { memo } from 'react';
import styled from '@emotion/styled';

const UserProfileContainer = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  padding: '30px',
  margin: '20px 0px',
  border: '1px solid rgb(222, 222, 222)',
  borderRadius: '10px',
  backgroundColor: 'whitesmoke',
});

const ProfileIconBox = styled.div({
  display: 'inline-flex',
});

const ProfileIcon = styled.div({
  display: 'inline-flex',
});

const IconImage = styled.img({
  height: '120px',
  borderRadius: '15px',
});

const UserNameBox = styled.div({
  display: 'grid',
  gridTemplateRows: '60px 60px',
  marginLeft: '10px',
  alignItems: 'center',
});

const UserName = styled.h1({
  textAlign: 'left',
});

const RankIconBox = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
});

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

function PlayerInfo({
  name,
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
      <ProfileIconBox>
        <ProfileIcon>
          <IconImage src="https://ddragon.leagueoflegends.com/cdn/11.13.1/img/profileicon/4574.png" alt="User Profile Icon" />
        </ProfileIcon>
        <UserNameBox>
          <UserName>
            {name}
          </UserName>
        </UserNameBox>
      </ProfileIconBox>
      <RankIconBox>
        <RankBox>
          <RankImage src="https://lolog.me/images/icon/DIAMOND.png" alt="DIAMOND" />
          <RankDescriptionWrap>
            <RankDescription>
              <RankTitle>솔로랭크</RankTitle>
              <RankTier>{soloRank ? `${soloRank.tier} ${soloRank.rank}` : 'Unranked'}</RankTier>
              <RankPoint>{soloRank ? `${soloRank.leaguePoints} LP` : ''}</RankPoint>
              <RankWinLose>{soloRank ? `${soloRank.wins}승 ${soloRank.losses}패` : ''}</RankWinLose>
            </RankDescription>
          </RankDescriptionWrap>
        </RankBox>
        <RankBox>
          <RankImage src="https://lolog.me/images/icon/DIAMOND.png" alt="DIAMOND" />
          <RankDescriptionWrap>
            <RankDescription>
              <RankTitle>자유랭크</RankTitle>
              <RankTier>{subRank ? `${subRank.tier} ${subRank.rank}` : 'Unranked'}</RankTier>
              <RankPoint>{subRank ? `${subRank.leaguePoints} LP` : ''}</RankPoint>
              <RankWinLose>{`${subRank.wins}승 ${subRank.losses}패`}</RankWinLose>
            </RankDescription>
          </RankDescriptionWrap>
        </RankBox>
      </RankIconBox>
    </UserProfileContainer>
  );
}

export default memo(PlayerInfo);
