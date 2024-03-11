import fixtures from '../../../fixtures';
import filterRestaurants from '../filterRestaurants';

const context = describe;

/**
 * 1. 전체 카테고리, 빈 텍스트
 * 2. 한식 카테고리, 빈 텍스트
 * 3. 중식 카테고리, 빈 텍스트
 * 4. 일식 카테고리, 빈 텍스트
 * 5. 전체 카테고리, 음식점 이름 검색
 */
describe('filterRestaurants', () => {
  const { restaurants } = fixtures;

  context('with "전체" category and empty text', () => {
    it('returns all restaurants', () => {
      const filteredRestaurants = filterRestaurants(
        restaurants,
        { text: '', category: '전체' },
      );

      expect(filteredRestaurants.length).toBe(restaurants.length);
    });
  });

  context('with "한식" category and empty text', () => {
    it('returns selected category restaurants', () => {
      const filteredRestaurants = filterRestaurants(
        restaurants,
        { text: '', category: '한식' },
      );

      expect(filteredRestaurants.length).toBe(1);
    });
  });

  context('with "중식" category and empty text', () => {
    it('returns selected category restaurants', () => {
      const filteredRestaurants = filterRestaurants(
        restaurants,
        { text: '', category: '중식' },
      );

      expect(filteredRestaurants.length).toBe(1);
    });
  });

  context('with "일식" category and empty text', () => {
    it('returns selected category restaurants', () => {
      const filteredRestaurants = filterRestaurants(
        restaurants,
        { text: '', category: '일식' },
      );

      expect(filteredRestaurants.length).toBe(1);
    });
  });

  context('with text', () => {
    it('returns filtered restaurants', () => {
      const text = '메가반점';

      const filteredRestaurants = filterRestaurants(
        restaurants,
        { text, category: '전체' },
      );

      const filteredRestaurant = filteredRestaurants[0];

      expect(filteredRestaurant.name).toBe(text);
    });
  });
});
