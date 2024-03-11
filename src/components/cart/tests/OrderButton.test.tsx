import { fireEvent, render, screen } from '@testing-library/react';

import fixtures from '../../../../fixtures';
import OrderButton from '../OrderButton';

/**
 * 1. calculateTotalPrice()를 통해 합계가 잘 계산되는지 확인
 * 2. 주문 버튼이 잘 호출 되는지 확인
 */
describe('OrderButton', () => {
  const { foods } = fixtures;

  const handleClickOrder = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderOrderButton() {
    render((
      <OrderButton
        selectedFoods={foods}
        handleClickOrder={handleClickOrder}
      />
    ));
  }

  it('renders order total price', () => {
    renderOrderButton();

    screen.getByText(/합계: 13,000원 주문/);
  });

  it('listens for order click event', () => {
    renderOrderButton();
    fireEvent.click(screen.getByText(/합계: 13,000원 주문/));

    expect(handleClickOrder).toBeCalled();
  });
});
