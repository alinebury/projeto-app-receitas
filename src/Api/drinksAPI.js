const ENDPOINT = 'https://www.thecocktaildb.com/api.php';

async function fetchDrinks() {
  const response = await fetch(ENDPOINT);
  const result = await response.json();
  return result.results;
}

export default fetchDrinks;
