import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [emailInput, setEmailInput] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');

  const checkEmail = () => (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(emailInput));
  const minLength = 6;
  const checkPass = () => passwordInput.length > minLength;

  const handleClick = () => {
    const user = { email: emailInput };
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(user));
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
        <Link to="/comidas">
          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={ !(checkEmail() && checkPass()) }
            onClick={ handleClick }
            className={ `entrar-btn ${!(checkEmail() && checkPass())
              ? 'disable' : 'enable'}` }
          >
            Entrar
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Login;
