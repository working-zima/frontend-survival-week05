import { fireEvent, render, screen } from '@testing-library/react';

import fixtures from '../../../../fixtures';
import CartItem from '../CartItem';

/**
 * 1. 자식 컴포넌트인 CartItem이 food를 잘 출력하는지 테스트
 * 2. 버튼이 알맞은 인덱스로 호출이 되는지 테스트
 */
describe('CartItem', () => {
  const { food } = fixtures;
  const index = 1;

  const handleClickCancel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderCartItem() {
    render((
      <CartItem
        food={food}
        index={index}
        handleClickCancel={handleClickCancel}
      />
    ));
  }

  it('renders item information', () => {
    renderCartItem();

    screen.getByText('짜장면(8,000원)');
  });

  it('listens for cancel button click event', () => {
    renderCartItem();
    fireEvent.click(screen.getByText('취소'));

    expect(handleClickCancel).toHaveBeenCalledWith(index);
  });
});
