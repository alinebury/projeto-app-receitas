import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../Styles/Body.css';
import { setStorageInProgressIngredient,
  removeStorageInProgressIngredient,
  getStorageInProgressRecipes,
  setStorageInProgressRecipes } from '../Services/localStorage';

function Ingredients(props) {
  const { itens, recipe, id, isFood } = props;
  const [list, setList] = useState([]);

  const handleChecked = (item) => {
    const key = isFood ? 'meals' : 'cocktails';
    const storage = getStorageInProgressRecipes()[key];
    if (storage[id]) {
      return storage[id].includes(item);
    }
    return false;
  };

  useEffect(() => (
    setStorageInProgressRecipes(id, isFood)
  ), []);

  useEffect(() => {
    setList(itens.map((item) => handleChecked(recipe[item])));
  }, [itens]);

  const handleOnChange = (check, ingredient) => {
    const storage = check ? setStorageInProgressIngredient
      : removeStorageInProgressIngredient;
    storage(id, isFood, recipe[ingredient]);
    setList(itens.map((item) => handleChecked(recipe[item])));
  };

  return (
    list.length !== 0 && (
      itens.map((item, index) => (
        <label
          htmlFor={ index }
          key={ index }
          data-testid={ `${index}-ingredient-step` }
          className={ list[index] ? 'complete' : '' }
        >
          <input // mago do css resolva isso aq
            id={ index }
            type="checkbox"
            value={ recipe[item] }
            checked={ list[index] }
            onChange={ ({ target: { checked } }) => (
              handleOnChange(checked, item)) }
          />
          { recipe[item] }
        </label>
      )))
  );
}

Ingredients.propTypes = {
  itens: PropTypes.arrayOf(PropTypes.string).isRequired,
  recipe: PropTypes.shape({}).isRequired,
  id: PropTypes.string.isRequired,
  isFood: PropTypes.bool.isRequired,
};

export default Ingredients;
