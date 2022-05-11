import React, { useContext, useState } from 'react';
import '../Styles/Login.css';
import { Redirect } from 'react-router-dom';
import RecipesContext from '../Context/RecipesContext';
import { setStorageUser,
  setStorageCocktailsToken,
  setStorageMealsToken } from '../Services/localStorage';

function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const {
    setEmail,
  } = useContext(RecipesContext);
  const [login, setLogin] = useState(true);

  const checkEmail = () => (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(emailInput));
  const minLength = 6;
  const checkPass = () => passwordInput.length > minLength;

  const handleClick = () => {
    const user = { email: emailInput };
    setStorageCocktailsToken(1);
    setStorageMealsToken(1);
    setStorageUser(user);
    setEmail(emailInput);
    setLogin(false);
  };

  return (
    <section className="login-container">
      <h2 className="title">Master Your Kitchen</h2>
      <i className="fas fa-utensils logo" />
      <h4 className="login-text">Login</h4>
      <div className="buttons">
        <input
          name="email"
          type="email"
          data-testid="email-input"
          placeholder="Email"
          value={ emailInput }
          autoComplete="none"
          onChange={ (e) => setEmailInput(e.target.value) }
          className="input-login"
        />
        <br />
        <input
          name="password"
          type="password"
          data-testid="password-input"
          minLength="6"
          placeholder="Senha"
          onChange={ (e) => setPasswordInput(e.target.value) }
          className="input-login"
        />
        <button
          type="button"
          name="Entrar"
          data-testid="login-submit-btn"
          disabled={ !(checkEmail() && checkPass()) }
          onClick={ handleClick }
          className={ `entrar-btn ${!(checkEmail() && checkPass())
            ? 'disable' : 'enable'}` }
        >
          Entrar
        </button>
        { !login && <Redirect to="/foods" /> }
      </div>
    </section>
  );
}

export default Login;
