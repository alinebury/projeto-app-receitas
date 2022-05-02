const ENDPOINT = 'https://www.thecocktaildb.com/api.php';

export async function fetchDrinks() {
  const response = await fetch(ENDPOINT);
  const result = await response.json();
  return result.results;
}

export async function fetchDrinksSearch({ search, searchRadio }) {
  try {
    const type = searchRadio === 'i' ? 'filter' : 'search';
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${type}.php?${searchRadio}=${search}`);
    const result = await response.json();
    return result.drinks ? result.drinks : [];
  } catch (error) {
    return [];
  }
}

export async function fetchRecipeDrink(id) {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const result = await response.json();
  return result.drinks;
}

export async function fetchRecommendationDrink() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const result = await response.json();
  return result.drinks;
}
