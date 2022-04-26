import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function LoginProvider({ children }) {
  const [email, setEmail] = useState('aqui');

  const contextValue = {
    email,
    setEmail,
  };

  return (
    <RecipesContext.Provider value={ contextValue }>
      { children }
    </RecipesContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LoginProvider;
