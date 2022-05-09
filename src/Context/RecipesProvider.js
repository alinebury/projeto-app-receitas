import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { fetchFoods, fetchFoodsCategories } from '../Api/foodsAPI';
import { fetchDrinks, fetchDrinksCategories } from '../Api/drinksAPI';

function RecipesProvider({ children }) {
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [search, setSearch] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [recipesAPI, setRecipesAPI] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [categoriesAPI, setCategoriesAPI] = useState([]);
  const [categories, setCategories] = useState('');
  const [radioAPI, setRadioAPI] = useState({
    search: '',
    searchRadio: '',
  });
  const [redirect, setRedirect] = useState(false);

  async function getSearch(type) {
    let resulRecipestAPI;
    let resultCategoriesAPI;
    if (type === 'Foods') {
      resulRecipestAPI = await fetchFoods();
      resultCategoriesAPI = await fetchFoodsCategories();
    } else {
      resulRecipestAPI = await fetchDrinks();
      resultCategoriesAPI = await fetchDrinksCategories();
    }
    setRecipesAPI(resulRecipestAPI);
    if (!redirect) setRecipes(resulRecipestAPI);
    else setRedirect(false);
    setCategoriesAPI(resultCategoriesAPI);
  }

  const contextValue = {
    foods,
    setFoods,
    drinks,
    setDrinks,
    email,
    setEmail,
    title,
    setTitle,
    search,
    setSearch,
    showSearchBar,
    setShowSearchBar,
    recipesAPI,
    setRecipesAPI,
    getSearch,
    categoriesAPI,
    setCategoriesAPI,
    categories,
    setCategories,
    recipes,
    setRecipes,
    radioAPI,
    setRadioAPI,
    redirect,
    setRedirect,
  };

  return (
    <RecipesContext.Provider value={ contextValue }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RecipesProvider;
