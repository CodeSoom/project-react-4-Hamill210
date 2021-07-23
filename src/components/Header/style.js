import styled from '@emotion/styled';

export const Div = {
  Container: styled.div({
    zIndex: '100',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    minHeight: '3.5em',
    background: '#5383e8',
    a: {
      fontSize: '1.8em',
      fontWeight: 'bold',
      margin: '1em 0',
      float: 'left',
      textAlign: 'center',
      color: '#FFF',
      textDecoration: 'none',
    },
  }),
  Content: styled.div({
    margin: '0 auto',
    width: '90%',
    maxWidth: '900px',
  }),
  HeaderContent: styled.div({
    float: 'left',
    display: 'flex',
  }),
};

export const temp = '';
