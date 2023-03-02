import { render } from '@testing-library/react';

import Cart from './Cart';

describe('App ', () => {
  it('renders without crash', () => {
    render(<Cart />);
  });
});
