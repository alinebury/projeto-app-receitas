const FAVORITE_RECIPES = 'favoriteRecipes';
const PROGRESS_RECIPES = 'inProgressRecipes';
const MEALS_TOKEN = 'mealsToken';
const COCKTIL_TOKEN = 'cocktailsToken';
const USER = 'user';

export function getStorageFavoriteRecipes() {
  const validate = localStorage.getItem(FAVORITE_RECIPES);
  return validate ? JSON.parse(validate) : [];
}

export function setStorageFavoriteRecipes(storage) {
  const prev = getStorageFavoriteRecipes();
  const newStorage = [...prev, storage];
  localStorage.setItem(FAVORITE_RECIPES, JSON.stringify(newStorage));
  // return newStorage;
}

export function removeStorageFavoriteRecipes(storage) {
  const prev = getStorageFavoriteRecipes();
  const newStorage = prev.filter((item) => item.id !== storage.id);
  localStorage.setItem(FAVORITE_RECIPES, JSON.stringify(newStorage));
  // return newStorage;
}

export function getStorageInProgressRecipes() {
  const validate = localStorage.getItem('inProgressRecipes');
  return JSON.parse(validate) || { cocktails: {}, meals: {} };
}

export function setStorageInProgressRecipes(id, isFood) {
  const prev = getStorageInProgressRecipes();
  const starRecipe = isFood
    ? { meals: { ...prev.meals, [id]: [] } }
    : { cocktails: { ...prev.cocktails, [id]: [] } };
  const newInProgress = { ...prev, ...starRecipe };
  localStorage.setItem(PROGRESS_RECIPES, JSON.stringify(newInProgress));
}

export function setStorageInProgressIngredient(id, isFood, item) {
  const prev = getStorageInProgressRecipes();
  const starRecipe = isFood
    ? { meals: { ...prev.meals, [id]: [...prev.meals[id], item] } }
    : { cocktails: { ...prev.cocktails, [id]: [...prev.cocktails[id], item] } };
  const newInProgress = { ...prev, ...starRecipe };
  localStorage.setItem(PROGRESS_RECIPES, JSON.stringify(newInProgress));
}

export function removeStorageInProgressIngredient(id, isFood, item) {
  const prev = getStorageInProgressRecipes();
  const starRecipe = isFood
    ? { meals:
      { ...prev.meals,
        [id]: [...prev.meals[id].filter((ingre) => ingre !== item)] } }
    : { cocktails:
      { ...prev.cocktails,
        [id]: [...prev.cocktails[id].filter((ingre) => ingre !== item)] } };
  const newInProgress = { ...prev, ...starRecipe };
  localStorage.setItem(PROGRESS_RECIPES, JSON.stringify(newInProgress));
}

export function setStorageMealsToken(storage) {
  localStorage.setItem(MEALS_TOKEN, storage);
}

export function setStorageCocktailsToken(storage) {
  localStorage.setItem(COCKTIL_TOKEN, storage);
}

export function setStorageUser(storage) {
  localStorage.setItem(USER, JSON.stringify(storage));
}
