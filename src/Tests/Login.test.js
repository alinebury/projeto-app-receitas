import React, { createContext } from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/react';
import Login from '../Pages/Login';
import RenderWithRouter from './RenderWithRouter';

const attribute = {
  emailInput: 'email-input',
  emailValidate: 'teste@teste.com',
  passwordInput: 'password-input',
  passwordValidate: '123456789',
  loginSubmit: 'login-submit-btn',
};

describe('testing login page', () => {
  const context = createContext();
  it('if the inputs are rendering', () => {
    const { getByTestId } = RenderWithRouter(<Login />, context);
    const inputEmail = getByTestId(attribute.emailInput);
    const inputPass = getByTestId(attribute.passwordInput);
    expect(inputEmail).toBeInTheDocument();
    expect(inputPass).toBeInTheDocument();
  });

  it('if possible write in the email input', () => {
    const { getByTestId } = RenderWithRouter(<Login />, context);
    const inputEmail = getByTestId(attribute.emailInput);
    userEvent.type(inputEmail, '');
    userEvent.type(inputEmail, attribute.emailValidate);
    expect(inputEmail.value).toBe(attribute.emailValidate);
  });

  it('if possible write in the password input', () => {
    const { getByTestId } = RenderWithRouter(<Login />, context);
    const inputPass = getByTestId(attribute.passwordInput);
    userEvent.type(inputPass, '');
    userEvent.type(inputPass, attribute.passwordValidate);
    expect(inputPass.value).toBe(attribute.passwordValidate);
  });

  it('if the button is disabled or enabled according to email and password validation',
    () => {
      const { getByTestId } = RenderWithRouter(<Login />, context);
      const inputEmail = getByTestId(attribute.emailInput);
      const inputPass = getByTestId(attribute.passwordInput);
      const foodButton = getByTestId(attribute.loginSubmit);

      userEvent.type(inputEmail, 'testeteste.com');
      userEvent.type(inputPass, '12345');
      expect(foodButton).toBeInTheDocument();
      expect(foodButton.disabled).toBe(true);

      userEvent.type(inputEmail, attribute.emailValidate);
      userEvent.type(inputPass, attribute.passwordValidate);
      expect(foodButton).toBeInTheDocument();
      expect(foodButton.disabled).toBe(false);
    });

  it('if after submitting mealsToken and cocktailsToken are saved in localstorage',
    () => {
      const { getByTestId } = RenderWithRouter(<Login />, context);
      const inputEmail = getByTestId(attribute.emailInput);
      const inputPass = getByTestId(attribute.passwordInput);
      const foodButton = getByTestId(attribute.loginSubmit);

      userEvent.type(inputEmail, attribute.emailValidate);
      userEvent.type(inputPass, attribute.passwordValidate);
      userEvent.click(foodButton);

      const mealsToken = localStorage.getItem('mealsToken');
      const cocktailsToken = localStorage.getItem('cocktailsToken');
      expect(mealsToken).toBe('1');
      expect(cocktailsToken).toBe('1');
    });

  it('if after submission the user key is saved in localstorage',
    () => {
      const { getByTestId } = RenderWithRouter(<Login />, context);
      const inputEmail = getByTestId(attribute.emailInput);
      const inputPass = getByTestId(attribute.passwordInput);
      const foodButton = getByTestId(attribute.loginSubmit);

      userEvent.type(inputEmail, attribute.emailValidate);
      userEvent.type(inputPass, attribute.passwordValidate);
      userEvent.click(foodButton);

      const user = JSON.parse(localStorage.getItem('user'));
      expect(user).toEqual({ email: attribute.emailValidate });
    });

  it('if there is a link to foods', () => {
    const { getByTestId, history } = RenderWithRouter(<Login />, context);
    const foodButton = getByTestId(attribute.loginSubmit);
    const inputEmail = getByTestId(attribute.emailInput);
    const inputPass = getByTestId(attribute.passwordInput);

    fireEvent.change(inputEmail, { target: { value: 'teste@teste.com' } });
    fireEvent.change(inputPass, { target: { value: '123456789' } });
    fireEvent.click(foodButton);

    const { pathname } = history.location;
    expect(pathname).toBe('/foods');
  });
});
