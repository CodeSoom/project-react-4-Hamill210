import { memo } from 'react';
import styled from '@emotion/styled';
import PlayerRankInfo from './PlayerRankInfo';

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

function PlayerInfo({
  summoner,
  soloRank,
  subRank,
}) {
  const { name, profileIconId } = summoner;

  if (!name) {
    return (
      <p>소환사명을 검색해주세요.</p>
    );
  }

  return (
    <UserProfileContainer>
      <ProfileIconBox>
        <ProfileIcon>
          <IconImage
            src={`https://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/${profileIconId}.png`}
            alt="User Profile Icon"
          />
        </ProfileIcon>
        <UserNameBox>
          <UserName>
            {name}
          </UserName>
        </UserNameBox>
      </ProfileIconBox>
      <RankIconBox>
        <PlayerRankInfo
          ranks={soloRank}
          title="솔로랭크"
        />
        <PlayerRankInfo
          ranks={subRank}
          title="자유 5:5 랭크"
        />
      </RankIconBox>
    </UserProfileContainer>
  );
}

export default memo(PlayerInfo);
