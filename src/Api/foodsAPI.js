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

export async function fetchFoodsRecipes({ search, searchRadio }) {
  try {
    const type = searchRadio === 'i' ? 'filter' : 'search';
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/${type}.php?${searchRadio}=${search}`);
    const result = await response.json();
    return result.meals ? result.meals : [];
  } catch (error) {
    return [];
  }
}

export async function fetchFoodsCategories() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const result = await response.json();
    return result.meals ? result.meals : [];
  } catch (error) {
    return [];
  }
}

export async function fetchFoodsFilterToCategory(category) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const result = await response.json();
    console.log(result);
    return result.meals ? result.meals : [];
  } catch (error) {
    return [];
  }
}

export async function fetchOneFoodRecipe(id) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const result = await response.json();
    return result.meals ? result.meals : [];
  } catch (error) {
    return [];
  }
}

export async function fetchFoodRecommendation() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const result = await response.json();
    return result.meals ? result.meals : [];
  } catch (error) {
    return [];
  }
}

export async function fetchFoodRandom() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const result = await response.json();
    return result.meals ? result.meals : [];
  } catch (error) {
    return [];
  }
}

export async function fetchFoodIngredient() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const result = await response.json();
    return result.meals ? result.meals : [];
  } catch (error) {
    return [];
  }
}

export async function fetchFoodNationalities() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const result = await response.json();
    console.log(result);
    return result.meals ? result.meals : [];
  } catch (error) {
    return [];
  }
}

export async function fetchFoodsByNationalities(nationalities) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationalities}`);
    const result = await response.json();
    console.log(result);
    return result.meals ? result.meals : [];
  } catch (error) {
    console.log(error);
    console.log(nationalities);
    return [];
  }
}
