import React, { createContext } from 'react';
import userEvent from '@testing-library/user-event';
import Login from '../Pages/Login';
import RenderWithRouter from './RenderWithRouter';

describe('testing login page', () => {
  const context = createContext();
  it('if the inputs are rendering', () => {
    const { getByTestId } = RenderWithRouter(<Login />, context);
    const inputEmail = getByTestId('email-input');
    const inputPass = getByTestId('password-input');
    expect(inputEmail).toBeInTheDocument();
    expect(inputPass).toBeInTheDocument();
  });

  it('if there is a link to foods', () => {
    const { getByRole, history } = RenderWithRouter(<Login />, context);
    const foodButton = getByRole('button', {
      name: 'Entrar',
    });
    userEvent.click(foodButton);
    const { pathname } = history.location;
    expect(pathname).toBe('/foods');
  });
});
