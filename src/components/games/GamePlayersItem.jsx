import { memo } from 'react';
import styled from '@emotion/styled';

import CHAMPION from '../../constant/champion';

const PlayerDiv = styled.div({
  display: 'block',
  width: '137px',
  height: 'auto',
  margin: '2px 0px',
  textAlign: 'left',
  whiteSpace: 'none',
});

const ChampionIconWrap = styled.div({
  display: 'inline-block',
  verticalAlign: 'middle',
  marginLeft: '3px',
  overflow: 'hidden',
  width: '22px',
  height: '22px',
});

const ChampionIconImg = styled.img({
  width: '100%',
  height: '100%',
});

const ChampionNameDiv = styled.div({
  display: 'inline-block',
  maxWidth: '100px',
  marginLeft: '5px',
  verticalAlign: 'middle',
  fontSize: '12px',
  color: '#555',
});

const ChampionName = styled.div({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: '#222',
});

function GamePlayersItem({ participants, participantIdentity }) {
  const participant = participants
    .find(({ participantId }) => participantId === participantIdentity.participantId);
  const champion = Object.values(CHAMPION)
    .find(({ key }) => key === participant.championId.toString());

  return (
    <PlayerDiv>
      <ChampionIconWrap>
        <ChampionIconImg
          src={`https://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/${champion.image.full}`}
          alt={champion.name}
        />
      </ChampionIconWrap>
      <ChampionNameDiv>
        <ChampionName>{participantIdentity.player.summonerName}</ChampionName>
      </ChampionNameDiv>
    </PlayerDiv>
  );
}

export default memo(GamePlayersItem);
