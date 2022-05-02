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
  return result.meals ? result.meals : [];
}

export async function fetchRecipeFood(id) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const result = await response.json();
  return result.meals;
}

export async function fetchRecommendationFood() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const result = await response.json();
  return result.meals;
}
