import React from 'react';
import {
  Switch, Route,
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
import { NotFound } from '../NotFound/NotFound';

export const App = () => {
  console.log('App');

  return (
    <div className={ 'App' }>
        <Switch>
          <Route
            exact
            path={'/'}>
            <Header />
            <Main />
            <Footer />
          </Route>
          <Route
            exact
            path={'/movies'}>
              <Header />
              <Movies />
              <Footer />
          </Route>
          <Route
            exact
            path={'/saved-movies'}>
              <Header />
              <SavedMovies />
              <Footer />
          </Route>
          <Route
            exact
            path={'/profile'}>
              <Header />
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
          <Route>
              <NotFound />
          </Route>
        </Switch>
    </div>
  );
};
