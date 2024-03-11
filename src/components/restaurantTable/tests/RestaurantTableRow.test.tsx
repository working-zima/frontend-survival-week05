import { render, screen } from '@testing-library/react';
import fixtures from '../../../../fixtures';
import RestaurantTableRow from '../RestaurantTableRow';

/**
 * 테이블을 테스트 할 때는 table 부터 렌더링 할 것
 */
describe('RestaurantTableRow', () => {
  const { restaurant } = fixtures;

  it('renders restaurant information', () => {
    render((
      <table>
        <tbody>
          <RestaurantTableRow restaurant={restaurant} />
        </tbody>
      </table>
    ));

    screen.getByText(/메가반점/);
    screen.getByText(/중식/);
    screen.getByText(/짜장면/);
  });
});
