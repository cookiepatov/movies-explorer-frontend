import {
  React, useState, useEffect, useCallback,
} from 'react';
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
import { InfoPopup } from '../InfoPopup';

const App = () => {
  const [isShaded, setIsShaded] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [topShading, setTopShading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [popupOpened, setPopupOpened] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [navigationOpened, setNavigationOpened] = useState(false);
  const [elementsDisabled, setElementsDisabled] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setCurrentUser({
      name: 'Евгений',
      email: 'ev@geniy.com',
    });

    setLoggedIn(true);
  }, []);

  const closeOnEsc = useCallback((e) => {
    if (e.key === 'Escape') {
      closePopup();
    }
  }, []);

  const handleLogout = () => {
    setCurrentUser({});
    setLoggedIn(false);
    history.push('/');
  };

  const disableScroll = () => {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => window.scrollTo(x, y);
  };

  const enableScroll = () => {
    window.onscroll = () => {};
  };

  const closePopup = () => {
    setIsShaded(false);
    setPopupOpened(false);
    setTopShading(false);
    document.removeEventListener('keydown', closeOnEsc);
    setElementsDisabled(false);
    enableScroll();
  };

  const openPopup = (message) => {
    disableScroll();
    setIsShaded(true);
    setTopShading(true);
    setPopupOpened(true);
    setPopupMessage(message);
    document.addEventListener('keydown', closeOnEsc);
    disableScroll();
    setElementsDisabled(true);
  };

  const handleChangeUser = (e, user) => {
    e.preventDefault();
    setCurrentUser(user);
    openPopup('Данные пользователя успешно изменены!');
  };

  const closeNavigation = () => {
    setIsShaded(false);
    setNavigationOpened(false);
    enableScroll();
  };

  const openNavigation = () => {
    setIsShaded(true);
    setNavigationOpened(true);
    disableScroll();
  };

  const handleShadingClick = () => {
    if (popupOpened) {
      closePopup();
    }
    if (navigationOpened) {
      closeNavigation();
    }
  };

  const handleRegister = (e, values) => {
    e.preventDefault();
    setCurrentUser({
      name: values.name,
      email: values.email,
    });
    setLoggedIn(true);
    history.push('/movies');
    openPopup('Пользователь зарегистрирован!');
  };

  const handleLogin = (e, values) => {
    e.preventDefault();
    setCurrentUser({
      name: values.email.split('@')[0],
      email: values.email,
    });
    setLoggedIn(true);
    history.push('/movies');
    openPopup('Авторизация прошла успешно!');
  };

  const changeSavedMovies = (isLiked, movieData) => {
    let newSavedMovies = [...savedMovies];
    if (isLiked) {
      newSavedMovies = savedMovies.filter((item) => item.nameRU !== movieData.nameRU);
    } else {
      newSavedMovies.push(movieData);
    }
    setSavedMovies(newSavedMovies);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={'page'}>
        <Shading
          higherThanHeader={topShading || false}
          isShaded={isShaded}
          onClick={handleShadingClick}
          disabled={!isShaded}/>
        <InfoPopup
          disabled={!popupOpened}
          isVisible={popupOpened || false}
          message={popupMessage || ''}
          onClose={closePopup}/>
        <Header
          isLoggedIn={loggedIn || false}
          navigationOpened={navigationOpened || false}
          navButtonClick={navigationOpened ? closeNavigation : openNavigation}
          disabled={elementsDisabled}/>
        <Switch>
          <Route
            exact
            path={'/'}>
              <Main />
          </Route>
          <Route
            exact
            path={'/movies'}>
              <Movies
                disabled={elementsDisabled}
                savedMovies={savedMovies}
                handleCardClick={changeSavedMovies}/>
          </Route>
          <Route
            exact
            path={'/saved-movies'}>
              <SavedMovies
                disabled={elementsDisabled}
                savedMovies={savedMovies}
                handleCardClick={changeSavedMovies}/>
          </Route>
          <Route
            exact
            path={'/profile'}>
              <Profile
                disabled={elementsDisabled}
                handleChangeUser={handleChangeUser}
                handleLogout={handleLogout} />
          </Route>
          <Route
            exact
            path={'/signin'}>
              <Login
                disabled={elementsDisabled}
                handleLogin={handleLogin} />
          </Route>
          <Route
            exact
            path={'/signup'}>
              <Register
                disabled={elementsDisabled}
                handleRegister={handleRegister} />
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
        <Footer disabled={elementsDisabled} />
    </div>
    </CurrentUserContext.Provider>
  );
};

export default withRouter(App);
