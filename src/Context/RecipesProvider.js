import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [search, setSearch] = useState(true);

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
