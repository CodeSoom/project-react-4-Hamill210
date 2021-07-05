import { render, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';

import App from './App';

describe('App', () => {
  function renderApp() {
    return render(<App />);
  }

  it('renders header', () => {
    const { queryByText } = renderApp();
    expect(queryByText('SOOM.GG')).not.toBeNull();
  });

  it('renders search box', () => {
    const { queryByPlaceholderText } = renderApp();
    const inputElement = queryByPlaceholderText('소환사명을 입력하세요.');

    expect(inputElement).not.toBeNull();

    fireEvent.change(inputElement, {
      target: { value: '최하누리' },
    });
  });

  it('renders search button', () => {
    const { queryByText } = renderApp();
    const buttonElement = queryByText('검색');

    expect(buttonElement).not.toBeNull();

    fireEvent.click(buttonElement);
  });
});
