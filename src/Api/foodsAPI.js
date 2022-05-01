const ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export async function fetchFoods() {
  try {
    const response = await fetch(ENDPOINT);
    const result = await response.json();
    return result.meals ? result.meals : [];
  } catch (error) {
    return [];
  }
}

export async function fetchFoodsSearch({ search, searchRadio }) {
  try {
    const type = searchRadio === 'i' ? 'filter' : 'search';
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/${type}.php?${searchRadio}=${search}`);
    const result = await response.json();
    return result.meals ? result.meals : [];
  } catch (error) {
    return [];
  }
}
