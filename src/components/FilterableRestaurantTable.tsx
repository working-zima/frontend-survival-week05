import { useState } from 'react';

import Restaurant from '../types/Restaurant';
import RestaurantTable from './RestaurantTable';
import SearchBar from './SearchBar';
import filterRestaurants from '../utils/filterRestaurants';

type FilterableRestaurantTableProps = {
  restaurants: Restaurant[]
}

function FilterableRestaurantTable(
  { restaurants }: FilterableRestaurantTableProps,
) {
  const [text, setText] = useState<string>('');
  const filteredRestaurants = filterRestaurants(restaurants, { text });

  return (
    <div>
      <SearchBar text={text} setText={setText} />
      <RestaurantTable restaurants={filteredRestaurants} />
    </div>
  );
}

export default FilterableRestaurantTable;
