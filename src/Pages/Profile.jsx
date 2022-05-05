import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/RecipesContext';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import '../Styles/Profile.css';

function Profile() {
  const { setTitle, setSearch } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Profile');
    setSearch(false);
  }, []);

  return (
    <section className="profile-page">
      <Header title="Perfil" />
      <p data-testid="profile-email"> Email </p>
      <div className="btn-profile">
        <button
          type="button"
          id="done"
          data-testid="profile-done-btn"
          className="profile-btns"
        >
          Receitas Feitas
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          className="profile-btns"
        >
          Receitas Favoritas
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          className="profile-btns"
        >
          Sair
        </button>
      </div>
      <Footer />
    </section>

  );
}

export default Profile;
