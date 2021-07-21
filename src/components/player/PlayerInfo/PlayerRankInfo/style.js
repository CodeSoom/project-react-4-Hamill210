import styled from '@emotion/styled';

export const Div = {
  Container: styled.div({
    display: 'inline-flex',
    margin: 'auto',
  }),
  RankContainer: styled.div({
    alignSelf: 'center',
    textAlign: 'center',
  }),
  RankContent: styled.div({
    display: 'grid',
  }),
};

export const Img = {
  RankImage: styled.img({
    height: '120px',
  }),
};

export const Span = {
  Title: styled.span({
    marginBottom: '3px',
    color: 'rgb(100, 100, 100)',
    fontSize: '0.8em',
    fontWeight: '500',
  }),
  Tier: styled.span({
    color: '#1f8ecd',
    fontSize: '1.2em',
    fontWeight: '900',
  }),
  Point: styled.span({
    color: '#555e5e',
    fontWeight: 'bold',
  }),
  WinLose: styled.span({
    color: 'rgb(100, 100, 100)',
    fontSize: '0.8em',
    fontWeight: '500',
  }),
};
