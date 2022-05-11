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

export async function fetchDrinksRecipes({ search, searchRadio }) {
  try {
    const type = searchRadio === 'i' ? 'filter' : 'search';
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${type}.php?${searchRadio}=${search}`);
    const result = await response.json();
    return result.drinks ? result.drinks : [];
  } catch (error) {
    return [];
  }
}

export async function fetchDrinksCategories() {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const result = await response.json();
    return result.drinks ? result.drinks : [];
  } catch (error) {
    return [];
  }
}

export async function fetchDrinksFilterToCategory(category) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    const result = await response.json();
    return result.drinks ? result.drinks : [];
  } catch (error) {
    return [];
  }
}

export async function fetchOneDrinkRecipe(id) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const result = await response.json();
    return result.drinks ? result.drinks : [];
  } catch (error) {
    return [];
  }
}

export async function fetchDrinkRecommendation() {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const result = await response.json();
    return result.drinks ? result.drinks : [];
  } catch (error) {
    return [];
  }
}

export async function fetchDrinkRandom() {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const result = await response.json();
    return result.drinks ? result.drinks : [];
  } catch (error) {
    return [];
  }
}

export async function fetchDrinkIngredient() {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const result = await response.json();
    return result.drinks ? result.drinks : [];
  } catch (error) {
    return [];
  }
}
