import Restaurant from '../src/types/Restaurant';

const restaurant: Restaurant = {
  id: 'RESTAURANT_01',
  category: '중식',
  name: '메가반점',
  menu: [{
    id: 'FOOD_01',
    name: '짜장면',
    price: 8_000,
  },
  {
    id: 'FOOD_02',
    name: '짬뽕',
    price: 5_000,
  }],
};

export default restaurant;
