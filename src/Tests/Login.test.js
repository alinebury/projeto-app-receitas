import React from 'react';
import userEvent from '@testing-library/user-event';
import Login from '../Pages/Login';

describe('testing login page', () => {
  it('if the inputs are rendering', () => {
    const { getByTestId } = renderWithRouter(<Login />);
    const inputEmail = getByTestId('email-input');
    const inputPass = getByTestId('password-input');
    expect(inputEmail).toBeInTheDocument();
    expect(inputPass).toBeInTheDocument();
  });

  it('if there is a link to comidas', () => {
    const { getByRole, history } = renderWithRouter(<Login />);
    const foodButton = getByRole('link', {
      name: 'Entrar',
    });
    userEvent.click(foodButton);
    const { pathname } = history.location;
    expect(pathname).toBe('/comidas');
  });
});
