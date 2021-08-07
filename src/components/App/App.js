import { React, useState, useEffect } from 'react';
import {
  Switch, Route, withRouter, Redirect, useHistory,
} from 'react-router-dom';

import CurrentUserContext from '../../contexts/CurrentUserContext';

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
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setCurrentUser({
      name: 'Евгений',
      email: 'ev@geniy.com',
    });

    setLoggedIn(true);
  }, []);

  const handleLogout = () => {
    setCurrentUser({});
    setLoggedIn(false);
    history.push('/');
  };

  const handleChangeUser = (e, user) => {
    e.preventDefault();
    setCurrentUser(user);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={'page'}>
        <Shading isShaded={isShaded}/>
        <Header
              isLoggedIn={loggedIn}
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
              <Profile
                handleChangeUser={handleChangeUser}
                handleLogout={handleLogout} />
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
    </CurrentUserContext.Provider>
  );
};

export default withRouter(App);
