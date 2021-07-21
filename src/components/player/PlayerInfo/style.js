import styled from '@emotion/styled';

export const Div = {
  Container: styled.div({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '30px',
    margin: '20px 0px',
    border: '1px solid rgb(222, 222, 222)',
    borderRadius: '10px',
    backgroundColor: 'whitesmoke',
  }),
  ProfileContainer: styled.div({
    display: 'inline-flex',
  }),
  RankContainer: styled.div({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  }),
  ProfileIconContent: styled.div({
    display: 'inline-flex',
  }),
  UserNameContent: styled.div({
    display: 'grid',
    gridTemplateRows: '60px 60px',
    marginLeft: '10px',
    alignItems: 'center',
  }),
};

export const Img = {
  ProfileIcon: styled.img({
    height: '120px',
    borderRadius: '15px',
  }),
};

export const H1 = {
  UserName: styled.h1({
    textAlign: 'left',
  }),
};
