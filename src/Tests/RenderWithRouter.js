import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import RecipesProvider from '../Context/RecipesProvider';

const renderWithRouter = (component) => {
  const historyMock = createMemoryHistory();
  return ({
    ...render(
      <RecipesProvider>
        <Router history={ historyMock }>{component}</Router>
      </RecipesProvider>,
    ),
    history: historyMock,
  });
};

export default renderWithRouter;
