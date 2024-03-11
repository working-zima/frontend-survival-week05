import { render, screen } from '@testing-library/react';

import fixtures from '../../../../fixtures';
import ReceiptPrinter from '../ReceiptPrinter';
import Receipt from '../../../types/Receipt';

const context = describe;

/**
 * receipt이 빈 객체인지 아닌지 비교해서 보여지는 텍스트 확인
 */
describe('ReceiptPrinter', () => {
  context('with receipt', () => {
    const { receipt } = fixtures;

    it('renders receipt', () => {
      render(<ReceiptPrinter receipt={receipt} />);

      screen.getByText(/주문번호/);
      screen.getByText(/주문목록/);
      screen.getByText(/주문번호/);
    });
  });

  context('without receipt', () => {
    const receipt = {} as Receipt;

    it('without receipt', () => {
      render(<ReceiptPrinter receipt={receipt} />);

      screen.getByText(/영수증 나오는 곳/);
    });
  });
});
