import { memo } from 'react';
import styled from '@emotion/styled';
import { BLUE_BACKGROUND_COLOR, RED_BACKGROUND_COLOR } from '../../styles/colors';

const InventoryWrap = styled.div({
  display: 'grid',
  height: 'auto',
  alignSelf: 'center',
  fontSize: '0',
  justifyContent: 'center',
  alignItems: 'center',
});

const ItemListDiv = styled.div({
  width: '120px',
  margin: '0 auto',
});

const ItemDiv = styled.div(({ isWin }) => ({
  display: 'inline-block',
  width: '28px',
  height: '28px',
  borderRadius: '3px',
  marginTop: '2px',
  marginRight: '2px',
  overflow: 'hidden',
  backgroundColor: isWin ? BLUE_BACKGROUND_COLOR.item : RED_BACKGROUND_COLOR.item,
}));

const ItemImg = styled.img({
  width: '100%',
  height: '100%',
});

const NoItemDiv = styled.div({
  width: '22px',
  height: '22px',
  backgroundImage: 'https://opgg-static.akamaized.net/images/pattern/opacity.1.png',
  backgroundSize: '100%',
});

const ItemBtn = styled.button({
  textAlign: 'center',
  marginTop: '2px',
  border: 'none',
  padding: 0,
  background: 'none',
  width: '28px',
  height: '28px',
});

const ItemPocketImg = styled.img({
  display: 'block',
  width: '100%',
});

const TrinketDiv = styled.div({
  marginTop: '10px',
  color: '#353a3a',
  lineHeight: '13px',
  fontSize: '12px',
  textAlign: 'center',
});

const TrinketImg = styled.img({
  verticalAlign: 'bottom',
});

function GamePlayerInventory({ isWin, stats }) {
  const {
    item0, item1, item2, item3, item4, item5, item6,
    visionWardsBoughtInGame,
  } = stats;
  const itemList = [item0, item1, item2, item6, item3, item4, item5];

  return (
    <InventoryWrap>
      <ItemListDiv>
        {itemList.map((item) => (
          <ItemDiv isWin={isWin}>
            {item
              ? <ItemImg src={`https://ddragon.leagueoflegends.com/cdn/11.14.1/img/item/${item}.png`} alt={`ItemId-${item}`} />
              : <NoItemDiv />}
          </ItemDiv>
        ))}
        <ItemBtn type="button">
          <ItemPocketImg
            src={`https://opgg-static.akamaized.net/css3/sprite/images/${isWin ? 'icon-buildblue-p.png' : 'icon-buildred-p.png'}`}
            alt="pocket"
          />
        </ItemBtn>
      </ItemListDiv>
      <TrinketDiv>
        <TrinketImg
          src={`https://opgg-static.akamaized.net/images/site/summoner/${isWin ? 'icon-ward-blue.png' : 'icon-ward-red.png'}`}
          alt="ward"
        />
        {' 제어 와드 '}
        <span>{visionWardsBoughtInGame}</span>
      </TrinketDiv>
    </InventoryWrap>
  );
}

export default memo(GamePlayerInventory);
