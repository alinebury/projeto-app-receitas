const ENDPOINT = 'https://www.themealdb.com/api.php';

export async function fetchFoods() {
  const response = await fetch(ENDPOINT);
  const result = await response.json();
  return result.results;
}

export async function fetchFoodsSearch({ search, searchRadio }) {
  const type = searchRadio === 'i' ? 'filter' : 'search';
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/${type}.php?${searchRadio}=${search}`);
  const result = await response.json();
  return result.meals;
}
