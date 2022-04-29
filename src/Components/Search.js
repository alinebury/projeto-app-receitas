import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../Context/RecipesContext';
import { fetchFoodsSearch } from '../Api/foodsAPI';
import { fetchDrinksSearch } from '../Api/drinksAPI';

function Search() {
  const history = useHistory();
  const {
    showSearchBar, title, setSearchAPI, search } = useContext(RecipesContext);
  const [radioAPI, setRadioAPI] = useState({
    search: '',
    searchRadio: '',
  });

  const handleClick = ({ target: { value, name } }) => {
    setRadioAPI((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const redirectResult = (result) => {
    if (result.length === 1 && result[0].idMeal) {
      history.push(`/foods/${result[0].idMeal}`);
    } else if (result.length === 1 && result[0].idDrink) {
      history.push(`/drinks/${result[0].idDrink}`);
    } else if (result.length === 0) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  };

  const buttonSearch = async () => {
    if (radioAPI.searchRadio === 'f' && radioAPI.search.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      let result;
      if (title === 'Foods') {
        result = await fetchFoodsSearch(radioAPI);
        setSearchAPI(result);
      } else {
        result = await fetchDrinksSearch(radioAPI);
        setSearchAPI(result);
      }
      redirectResult(result);
    }
  };

  return (
    showSearchBar && search && (
      <section className="search-bar">
        <input
          data-testid="search-input"
          type="search"
          placeholder="pesquisar receita"
          name="search"
          onChange={ handleClick }
        />
        <br />
        {/* mago do css resolva isso aq */}
        <label htmlFor="ingredient-search-radio">
          <input
            type="radio"
            name="searchRadio"
            id="ingredient-search-radio"
            data-testid="ingredient-search-radio"
            value="i"
            onClick={ handleClick }
          />
          Ingredient
        </label>
        <label htmlFor="name-search-radio">
          <input
            type="radio"
            id="name-search-radio"
            name="searchRadio"
            data-testid="name-search-radio"
            value="s"
            onClick={ handleClick }
          />
          Name
        </label>
        <label htmlFor="first-letter-search-radio">
          <input
            type="radio"
            name="searchRadio"
            id="first-letter-search-radio"
            data-testid="first-letter-search-radio"
            value="f"
            onClick={ handleClick }
          />
          First Letter
        </label>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ buttonSearch }
        >
          Buscar
        </button>
      </section>
    )
  );
}

export default Search;
