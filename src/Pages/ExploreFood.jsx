import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../Context/RecipesContext';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { fetchFoodRandom } from '../Api/foodsAPI';

function ExploreFood() {
  const { setTitle, setSearch } = useContext(RecipesContext);
  const history = useHistory();

  useEffect(() => {
    setTitle('Explore Foods');
    setSearch(false);
  }, []);

  const handleClick = async ({ target: { name } }) => {
    if (name === 'surprise') {
      const API = await fetchFoodRandom();
      history.push(`/foods/${API[0].idMeal}`);
    } else {
      history.push(`/explore/foods/${name}`);
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
          data-testid="explore-by-nationality"
          name="nationalities"
          onClick={ handleClick }
        >
          By Nationality
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ handleClick }
          name="surprise"
        >
          Surprise me!
        </button>
      </div>
      <Footer />
    </>
  );
}

export default ExploreFood;
