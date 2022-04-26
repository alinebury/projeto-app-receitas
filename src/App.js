import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import RecipesProvider from './Context/RecipesProvider';
import Login from './Pages/Login';
import Foods from './Pages/Foods';
import NotFound from './Pages/NotFound';
import Drinks from './Pages/Drinks';

class App extends React.Component {
  render() {
    return (
      <>
        <p>Recipes App</p>
        <RecipesProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={ Login } exact />
              <Route path="/foods" component={ Foods } exact />
              <Route path="/drinks" component={ Drinks } exact />
              <Route path="/*" component={ NotFound } />
            </Switch>
          </BrowserRouter>
        </RecipesProvider>
      </>
    );
  }
}

export default App;
