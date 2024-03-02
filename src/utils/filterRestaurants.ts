import Restaurant from '../types/Restaurant';

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

type FilterConditions = {
  text: string;
}

function filterRestaurants(
  restaurants: Restaurant[],
  { text }: FilterConditions,
) {
  const query = normalize(text);

  if (!query) {
    return restaurants;
  }

  return restaurants.filter(
    (restaurant: Restaurant) => (normalize(restaurant.name).includes(query)),
  );
}

export default filterRestaurants;
