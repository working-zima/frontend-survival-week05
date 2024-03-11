import { render, waitFor, screen } from '@testing-library/react';

import App from './App';

describe('App ', () => {
  it('renders restaurants', async () => {
    render(<App />);

    await waitFor(() => {
      screen.findByText(/메가반점/);
      screen.findByText(/메리김밥/);
    });
  });
});
