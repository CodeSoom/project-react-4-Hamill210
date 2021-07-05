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

  it('renders Search Area', () => {
    const { queryByPlaceholderText } = renderApp();
    const inputElement = queryByPlaceholderText('소환사명을 입력하세요.');

    expect(inputElement).not.toBeNull();

    fireEvent.change(inputElement, {
      target: { value: '최하누리' },
    });
  });
});
