import {
  React, useState, useEffect, useCallback,
} from 'react';
import {
  Switch, Route, withRouter, Redirect, useHistory,
} from 'react-router-dom';

import mainApi from '../../utils/MainApi';

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
import { ProtectedRoute } from '../ProtectedRoute';
import { formatMovieData } from '../../utils';

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
  const [registerError, setRegisterError] = useState('');
  const [loginError, setLoginError] = useState('');

  const history = useHistory();

  const closeOnEsc = useCallback((e) => {
    if (e.key === 'Escape') {
      closePopup();
    }
  }, []);

  const getInitialData = () => {
    Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies()])
      .then(([userData, moviesData]) => {
        setCurrentUser(userData);
        setLoggedIn(true);
        history.push('/movies');
        setSavedMovies(moviesData);
      })
      .catch(openPopup);
  };

  const checkToken = () => {
    mainApi.checkToken()
      .then(() => {
        getInitialData();
      })
      .catch((err) => {
        if (err.message !== 'no token') {
          openPopup(err);
        }
      });
  };

  const removeToken = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('lastSearchedMovies');
  };

  useEffect(() => {
    checkToken();
  }, []);

  const handleLogout = () => {
    setCurrentUser({});
    setLoggedIn(false);
    history.push('/');
    removeToken();
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

  const openPopup = (data) => {
    disableScroll();
    setIsShaded(true);
    setTopShading(true);
    setPopupOpened(true);
    setPopupMessage(data.message || data);
    document.addEventListener('keydown', closeOnEsc);
    disableScroll();
    setElementsDisabled(true);
  };

  const handleChangeUser = (e, user) => {
    e.preventDefault();
    mainApi.setUserInfo(user.name, user.email)
      .then(setCurrentUser)
      .catch(openPopup);
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

  const saveToken = (token) => {
    mainApi.setNewToken(token);
    localStorage.setItem('jwt', token);
  };

  const authorize = ({ email, password }) => {
    mainApi.authorize({ email, password })
      .then((data) => {
        saveToken(data.token);
        getInitialData();
      })
      .catch((err) => setLoginError(err.message));
  };

  const handleRegister = (e, values) => {
    e.preventDefault();
    const { email, name, password } = values;
    mainApi.register({ email, name, password })
      .then(() => authorize({ email, password }))
      .catch((err) => setRegisterError(err.message));
  };

  const handleLogin = (e, values) => {
    e.preventDefault();
    const { email, password } = values;
    authorize({ email, password });
  };

  const getSavedMovieId = (movieId) => savedMovies
    .find((movie) => (movie.movieId === movieId))
    ._id;

  const changeSavedMovies = (isLiked, movieData) => {
    if (isLiked) {
      mainApi.removeMovie(movieData._id || getSavedMovieId(movieData.id))
        .then(() => {
          const newSavedMovies = savedMovies
            .filter((item) => ((item.movieId !== movieData.movieId)
            && (item.movieId !== movieData.id)));
          setSavedMovies(newSavedMovies);
        })
        .catch(openPopup);
    } else {
      const formattedData = formatMovieData(movieData);
      mainApi.addNewMovie(formattedData)
        .then((data) => {
          const newSavedMovies = [...savedMovies, data.movie];
          setSavedMovies(newSavedMovies);
        })
        .catch(openPopup);
    }
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
          <ProtectedRoute
            exact
            path={'/movies'}
            loggedIn={loggedIn}
            component={Movies}
            disabled={elementsDisabled}
            savedMovies={savedMovies}
            openPopup={openPopup}
            handleCardClick={changeSavedMovies} />
          <ProtectedRoute
            exact
            path={'/saved-movies'}
            loggedIn={loggedIn}
            component={SavedMovies}
            disabled={elementsDisabled}
            savedMovies={savedMovies}
            handleCardClick={changeSavedMovies} />
          <ProtectedRoute
            exact
            path={'/profile'}
            loggedIn={loggedIn}
            component={Profile}
            disabled={elementsDisabled}
            handleChangeUser={handleChangeUser}
            handleLogout={handleLogout} />
          <Route
            exact
            path={'/signin'}>
              <Login
                authError={loginError}
                disabled={elementsDisabled}
                handleLogin={handleLogin} />
          </Route>
          <Route
            exact
            path={'/signup'}>
              <Register
                authError={registerError}
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
