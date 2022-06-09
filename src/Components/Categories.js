import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../Context/RecipesContext';
import { fetchFoodsFilterToCategory } from '../Api/foodsAPI';
import { fetchDrinksFilterToCategory } from '../Api/drinksAPI';

const MAXCATEGORIES = 5;
const selected = 'btn-categories selected';
const selectable = 'btn-categories selectable';

function Categories(props) {
  const { type } = props;
  const { categoriesAPI,
    recipesAPI, setRecipes,
    categories, setCategories, redirect } = useContext(RecipesContext);

  const fetchFilterCategory = type === 'foods'
    ? async () => setRecipes(await fetchFoodsFilterToCategory(categories))
    : async () => setRecipes(await fetchDrinksFilterToCategory(categories));

  function buttons(item, index) {
    const { strCategory } = item;
    const id = Math.random(Number(type === 'foods' ? item.idMeal : item.idDrink));
    return (
      <button
        key={ id }
        type="button"
        className={ categories === strCategory ? selected : selectable }
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
    } else if (!redirect) {
      setRecipes(recipesAPI);
    }
  }, [categories]);

  return (
    <div className="daddy-categories">
      { categoriesAPI && categoriesAPI.length > 0 && (
        <button
          type="button"
          onClick={ () => setCategories('') }
          data-testid="All-category-filter"
          className={ categories === '' ? selected : selectable }
        >
          All
        </button>)}
      { categoriesAPI.slice(0, MAXCATEGORIES)
        .map((item, index) => buttons(item, index)) }
    </div>
  );
}

Categories.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Categories;
