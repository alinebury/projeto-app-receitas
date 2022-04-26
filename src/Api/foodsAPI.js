const ENDPOINT = 'https://www.themealdb.com/api.php';

async function fetchFoods() {
  const response = await fetch(ENDPOINT);
  const result = await response.json();
  return result.results;
}

export default fetchFoods;
