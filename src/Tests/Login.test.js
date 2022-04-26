import React, { createContext } from 'react';
// import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/react';
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
    const { getByTestId, history } = RenderWithRouter(<Login />, context);
    const foodButton = getByTestId('login-submit-btn');
    const inputEmail = getByTestId('email-input');
    const inputPass = getByTestId('password-input');

    fireEvent.change(inputEmail, { target: { value: 'teste@teste.com' } });
    fireEvent.change(inputPass, { target: { value: '123456789' } });
    fireEvent.click(foodButton);

    const { pathname } = history.location;
    expect(pathname).toBe('/foods');
  });
});
