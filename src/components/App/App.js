import { React, useState } from 'react';
import {
  Switch, Route, withRouter, Redirect,
} from 'react-router-dom';

import './App.css';

import { Header } from '../Header';
import { Footer } from '../Footer';

import { Main } from '../Main';
import { Movies } from '../Movies';
import { SavedMovies } from '../SavedMovies';
import { Profile } from '../Profile';
import { Login } from '../Login';
import { Register } from '../Register';
import { NotFound } from '../NotFound';
import { Shading } from '../Shading';

const App = () => {
  const [isShaded, setIsShaded] = useState(false);

  return (
    <div className={'page'}>
        <Shading isShaded={isShaded}/>
        <Header
              isLoggedIn={true}
              toggleShading={() => setIsShaded(!isShaded)}/>
        <Switch>
          <Route
            exact
            path={'/'}>
              <Main />
          </Route>
          <Route
            exact
            path={'/movies'}>
              <Movies />
          </Route>
          <Route
            exact
            path={'/saved-movies'}>
              <SavedMovies />
          </Route>
          <Route
            exact
            path={'/profile'}>
              <Profile />
          </Route>
          <Route
            exact
            path={'/signin'}>
              <Login />
          </Route>
          <Route
            exact
            path={'/signup'}>
              <Register />
          </Route>
          <Route
            exact
            path={'/404'}>
              <NotFound />
            </Route>
          <Route>
            <Redirect to={'/404'}/>
          </Route>
        </Switch>
        <Footer />
    </div>
  );
};

export default withRouter(App);
