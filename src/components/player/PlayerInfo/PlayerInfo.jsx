import { memo } from 'react';

import * as Styled from './style';
import PlayerRankInfo from './PlayerRankInfo';

function PlayerInfo({
  summoner,
  soloRank,
  subRank,
}) {
  const { name, profileIconId } = summoner;

  if (!name) {
    return (
      <></>
    );
  }

  return (
    <Styled.Div.Container>
      <Styled.Div.ProfileContainer>
        <Styled.Div.ProfileIconContent>
          <Styled.Img.ProfileIcon
            src={`https://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/${profileIconId}.png`}
            alt="User Profile Icon"
          />
        </Styled.Div.ProfileIconContent>
        <Styled.Div.UserNameContent>
          <Styled.H1.UserName>
            {name}
          </Styled.H1.UserName>
          <Styled.Button.UpdateUserInfo type="button">
            전적 갱신
          </Styled.Button.UpdateUserInfo>
        </Styled.Div.UserNameContent>
      </Styled.Div.ProfileContainer>
      <Styled.Div.RankContainer>
        <PlayerRankInfo
          ranks={soloRank}
          title="솔로랭크"
        />
        <PlayerRankInfo
          ranks={subRank}
          title="자유 5:5 랭크"
        />
      </Styled.Div.RankContainer>
    </Styled.Div.Container>
  );
}

export default memo(PlayerInfo);
