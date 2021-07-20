import { memo } from 'react';
import styled from '@emotion/styled';

import CHAMPION from '../../constant/champion';
import SPELL from '../../constant/spell';
import RUNE from '../../constant/rune';

const PlayerProfileWrap = styled.div({
  display: 'flex',
  width: '174px',
  fontSize: '0',
  height: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: '11px',
});

const ChampionIconWrap = styled.div({
  display: 'inline-block',
  width: '64px',
  height: '64px',
  alignSelf: 'center',
  borderRadius: '50%',
  overflow: 'hidden',
  border: '0',
  color: 'inherit',
});

const ChampionIconImg = styled.img({
  display: 'block',
  width: '100%',
  height: '100%',
  background: '#000',
});

const SpellIconWrap = styled.div({
  display: 'inline-block',
  alignSelf: 'center',
  marginLeft: '4px',
});

const SpellIconDiv = styled.div({
  marginLeft: '0',
  dispaly: 'block',
  width: '32px',
  height: '32px',
  marginTop: '2px',
  borderRadius: '3px',
  overflow: 'hidden',
});

const SpellIconImg = styled.img({
  display: 'block',
  width: '100%',
  height: '100%',
});

const RuneIconDiv = styled.div({
  width: '32px',
  height: '32px',
  marginTop: '0',
});

const MainRuneIconImg = styled.img({
  display: 'block',
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  background: '#000',
});

const SubRuneIconImg = styled.img({
  display: 'block',
  width: '100%',
  height: '100%',
  borderRadius: '50%',
});

const ChampionNameDiv = styled.div({
  marginTop: '-4px',
  padding: '9px',
  fontSize: '13px',
  color: '#555',
  textAlign: 'center',
});

const ChampionNameSpan = styled.span({
  textDecoration: 'none',
  color: 'inherit',
});

function GamePlayerProfileInfo({
  championId, leftSpell, rightSpell, perk0, perkSubStyle, perkPrimaryStyle,
}) {
  const { image, id, name } = Object.values(CHAMPION)
    .find(({ key }) => key === championId.toString());

  function getSpellName(spell) {
    return Object.values(SPELL).find(({ key }) => key === spell.toString()).id;
  }

  const mainRune = RUNE.find((rune) => rune.id === perkPrimaryStyle);
  const mainDetailRune = Object.values(mainRune.slots[0].runes).find((rune) => rune.id === perk0);
  const subRune = RUNE.find((rune) => rune.id === perkSubStyle);

  return (
    <PlayerProfileWrap>
      <ChampionIconWrap>
        <ChampionIconImg
          src={`https://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/${image.full}`}
          alt={id}
        />
      </ChampionIconWrap>
      <SpellIconWrap>
        <SpellIconDiv>
          <SpellIconImg
            src={`https://ddragon.leagueoflegends.com/cdn/11.14.1/img/spell/${getSpellName(leftSpell)}.png`}
            alt="left spell"
          />
        </SpellIconDiv>
        <SpellIconDiv>
          <SpellIconImg
            src={`https://ddragon.leagueoflegends.com/cdn/11.14.1/img/spell/${getSpellName(rightSpell)}.png`}
            alt="right spell"
          />
        </SpellIconDiv>
      </SpellIconWrap>
      <SpellIconWrap>
        <RuneIconDiv>
          <MainRuneIconImg src={`https://ddragon.leagueoflegends.com/cdn/img/${mainDetailRune.icon}`} alt={mainDetailRune.name} />
        </RuneIconDiv>
        <RuneIconDiv>
          <SubRuneIconImg src={`https://ddragon.leagueoflegends.com/cdn/img/${subRune.icon}`} alt={subRune.name} />
        </RuneIconDiv>
      </SpellIconWrap>
      <ChampionNameDiv>
        <ChampionNameSpan>{name}</ChampionNameSpan>
      </ChampionNameDiv>
    </PlayerProfileWrap>
  );
}

export default memo(GamePlayerProfileInfo);
