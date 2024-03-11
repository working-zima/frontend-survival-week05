import { render, screen } from '@testing-library/react';

import fixtures from '../../../../fixtures';
import MenuItem from '../MenuItem';

/**
 * 1. 자식 컴포넌트인 CartItem이 food를 잘 출력하는지 테스트
 */
describe('MenuItem', () => {
  const { food } = fixtures;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderCartItem() {
    render((
      <MenuItem
        food={food}
      />
    ));
  }

  it('renders item information', () => {
    renderCartItem();

    screen.getByText('짜장면(8,000원)');
  });
});
