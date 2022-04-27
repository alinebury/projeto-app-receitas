import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './Styles/Body.css';
import RecipesProvider from './Context/RecipesProvider';
import Login from './Pages/Login';
import Foods from './Pages/Foods';
import NotFound from './Pages/NotFound';
import Drinks from './Pages/Drinks';
// import ExploreDrinks from './Pages/ExploreDrink';
// import ExploreDrinkIngredients from './Pages/ExploreDrinksIngredients';
// import ExploreFood from './Pages/ExploreFood';
// import ExploreFoodIngredients from './Pages/ExploreFoodIngredients';
// import ExploreFoodNacionalities from './Pages/ExploreFoodNacionalities';
// import Profile from './Pages/Profile';

class App extends React.Component {
  render() {
    return (
      <RecipesProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ Login } exact />
            <Route path="/foods" component={ Foods } exact />
            <Route path="/drinks" component={ Drinks } exact />
            <Route path="/*" component={ NotFound } />
            {/* <Route path="/explore/foods" component={ ExploreFood } exact />
            <Route path="/explore/drinks" component={ ExploreDrinks } exact />
            <Route path="/explore/foods/ingredients" component={ ExploreFoodIngredients } exact />
            <Route path="/explore/drinks/ingredients" component={ ExploreDrinkIngredients } exact />
            <Route path="/explore/foods/nacionalities" component={ ExploreFoodNacionalities } exact />
            <Route path="/profile" component={ Profile } exact /> */}
          </Switch>
        </BrowserRouter>
      </RecipesProvider>
    );
  }
}

export default App;
