import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../Context/RecipesContext';
import { fetchFoodsFilterToCategory } from '../Api/foodsAPI';
import { fetchDrinksFilterToCategory } from '../Api/drinksAPI';

const MAXCATEGORIES = 5;

function Categories(props) {
  const { type } = props;
  const { categoriesAPI,
    recipesAPI, setRecipes,
    categories, setCategories } = useContext(RecipesContext);

  const fetchFilterCategory = type === 'foods'
    ? async () => setRecipes(await fetchFoodsFilterToCategory(categories))
    : async () => setRecipes(await fetchDrinksFilterToCategory(categories));

  function checkbox(item, index) {
    const { strCategory } = item;
    const id = Math.random(Number(type === 'foods' ? item.idMeal : item.idDrink));
    return (
      <button
        key={ id }
        type="button"
        id={ `category-${index}` }
        name={ `category-${index}` }
        onClick={ () => setCategories(
          (prev) => (strCategory === prev ? '' : strCategory),
        ) }
        data-testid={ `${strCategory}-category-filter` }
      >
        { strCategory }
      </button>
    );
  }

  useEffect(() => {
    if (categories !== '') {
      fetchFilterCategory(categories);
    } else {
      setRecipes(recipesAPI);
    }
  }, [categories]);

  return (
    <div>
      <button
        type="button"
        onClick={ () => setCategories('') }
        data-testid="All-category-filter"
      >
        All
      </button>
      { categoriesAPI.slice(0, MAXCATEGORIES)
        .map((item, index) => checkbox(item, index)) }
    </div>
  );
}

Categories.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Categories;
