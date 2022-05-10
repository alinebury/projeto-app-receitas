import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../Context/RecipesContext';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import '../Styles/Profile.css';
import { getStorageUser, clearStorage } from '../Services/localStorage';

function Profile() {
  const { setTitle, setSearch } = useContext(RecipesContext);
  const user = getStorageUser();
  const history = useHistory();

  useEffect(() => {
    setTitle('Profile');
    setSearch(false);
  }, []);

  const handleClick = ({ target: { name } }) => {
    if (name === '/') clearStorage();
    history.push(`${name}`);
  };

  return (
    <>
      <Header title="Perfil" />
      <section className="profile-page">
        <p data-testid="profile-email">{ user.email }</p>
        <div className="btn-profile">
          <button
            type="button"
            id="done"
            data-testid="profile-done-btn"
            className="profile-btns"
            name="/done-recipes"
            onClick={ handleClick }
          >
            Done Recipes
          </button>
          <button
            type="button"
            data-testid="profile-favorite-btn"
            className="profile-btns"
            name="/favorite-recipes"
            onClick={ handleClick }
          >
            Favorite Recipes
          </button>
          <button
            type="button"
            data-testid="profile-logout-btn"
            className="profile-btns"
            name="/"
            onClick={ handleClick }
          >
            Logout
          </button>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Profile;
