const ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export async function fetchDrinks() {
  try {
    const response = await fetch(ENDPOINT);
    const result = await response.json();
    return result.drinks ? result.drinks : [];
  } catch (error) {
    return [];
  }
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
