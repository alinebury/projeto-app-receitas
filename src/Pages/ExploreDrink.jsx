import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../Context/RecipesContext';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { fetchDrinkRandom } from '../Api/drinksAPI';

function ExploreDrinks() {
  const { setTitle, setSearch } = useContext(RecipesContext);
  const history = useHistory();

  useEffect(() => {
    setTitle('Explore Drinks');
    setSearch(false);
  }, []);

  const handleClick = async ({ target: { name } }) => {
    if (name === 'surprise') {
      const API = await fetchDrinkRandom();
      history.push(`/drinks/${API[0].idDrink}`);
    } else {
      history.push(`/explore/drinks/${name}`);
    }
  };

  return (
    <>
      <Header />
      <div>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          name="ingredients"
          onClick={ handleClick }
        >
          By Ingredient
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
          name="surprise"
          onClick={ handleClick }
        >
          Surprise me!
        </button>
      </div>
      <Footer />
    </>
  );
}

export default ExploreDrinks;
