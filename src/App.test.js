import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import App from './App';

describe('App', () => {
  it('renders header', () => {
    const { queryByText } = render(<App />);
    expect(queryByText('SOOM.GG')).not.toBeNull();
  });
});
