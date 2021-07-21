import styled from '@emotion/styled';

export const Div = {
  Container: styled.div({
    display: 'flex',
    position: 'relative',
    height: '32px',
    borderRadius: '4px',
  }),
  CountryContent: styled.div({
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    background: '#ecf2ff',
    color: '#4171d6',
    fontSize: '12px',
    padding: '0 12px',
    borderRadius: '4px 0 0 4px',
  }),
};

export const Span = {
  Country: styled.span({
    margin: '6px',
  }),
};

export const Input = {
  TextArea: styled.input({
    width: '256px',
    height: '100%',
    padding: '9px 12px',
    border: 'none',
    background: '#fff',
    fontSize: '12px',
    color: '#727272',
    outline: 'none',
    boxSizing: 'border-box',
  }),
};

export const Button = {
  SearchBtn: styled.button({
    position: 'absolute',
    top: 0,
    right: 0,
    width: '54px',
    height: '100%',
    textAlign: 'center',
    background: '#fff',
    border: 'none',
  }),
};

export const Img = {
  SearchImg: styled.img({
    width: '100%',
    height: '100%',
  }),
};
