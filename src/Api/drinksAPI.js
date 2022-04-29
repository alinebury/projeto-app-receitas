const ENDPOINT = 'https://www.thecocktaildb.com/api.php';

export async function fetchDrinks() {
  const response = await fetch(ENDPOINT);
  const result = await response.json();
  return result.results;
}

export async function fetchDrinksSearch({ search, searchRadio }) {
  const type = searchRadio === 'i' ? 'filter' : 'search';
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${type}.php?${searchRadio}=${search}`);
  const result = await response.json();
  return result.drinks;
}
