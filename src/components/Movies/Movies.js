import {
  React, useEffect, useState, useCallback,
} from 'react';

import { Preloader } from './Preloader';

import { SearchForm } from '../SearchForm';

import { MoviesCardList } from '../MoviesCardList';
import { getBeatMovies, searchStringFiltration } from '../../utils';

import './Movies.css';
import { MOVIES_API_ERROR, NOTHING_FOUND } from '../../utils/constants/messages';
import {
  SCREEN_L, SCREEN_M, SCREEN_S, SCREEN_XL,
} from '../../utils/constants/visibleElementsData';

export const Movies = (props) => {
  const {
    savedMovies, handleCardClick, disabled,
  } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [loadedMovies, setLoadedMovies] = useState([]);
  const [filtededMovies, setFilteredMovies] = useState([]);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [shownMoviesCount, setShownMoviesCount] = useState(0);
  const [moreButtonVisible, setMoreButtonVisible] = useState(false);
  const [errorMes, setErrorMes] = useState('');
  const [lastSearchString, setLastSearchString] = useState('');

  const setWidth = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', setWidth);
    const filteredString = localStorage.getItem('lastSearchedMovies');
    if (filteredString) {
      setFilteredMovies(JSON.parse(filteredString));
    }
    return () => {
      window.removeEventListener('resize', setWidth);
    };
  }, []);

  const handleSearch = (e, searchData) => {
    setFilteredMovies([]);
    setMoreButtonVisible(false);
    e.preventDefault();
    setShownMoviesCount(0);
    if (loadedMovies.length) {
      filterMovies(loadedMovies, searchData);
    } else {
      setIsLoading(true);
      getBeatMovies()
        .then((movies) => {
          setLoadedMovies(movies);
          filterMovies(movies, searchData);
        })
        .catch(() => setErrorMes(MOVIES_API_ERROR))
        .finally(() => setIsLoading(false));
    }
  };

  const filterMovies = (movies, searchData) => {
    setLastSearchString(searchData.searchString);
    const filtered = searchStringFiltration(movies, searchData);
    if (filtered.length > 0) {
      setFilteredMovies(filtered);
    } else {
      setErrorMes(NOTHING_FOUND);
    }
    localStorage.setItem('lastSearchedMovies', JSON.stringify(filtered));
  };

  const handleCheckbox = (short) => {
    if (filtededMovies.length && lastSearchString.length) {
      filterMovies(loadedMovies, { searchString: lastSearchString, short });
    }
  };

  useEffect(() => {
    if (screenWidth > SCREEN_XL.width) {
      if (shownMoviesCount % SCREEN_XL.elInRow) {
        setShownMoviesCount(
          shownMoviesCount + (SCREEN_XL.elInRow - (shownMoviesCount % SCREEN_XL.elInRow)),
        );
      } else if (!shownMoviesCount) {
        setShownMoviesCount(SCREEN_XL.initEl);
      }
    } else if (screenWidth > SCREEN_L.width) {
      if (shownMoviesCount % SCREEN_L.elInRow) {
        setShownMoviesCount(
          shownMoviesCount + (SCREEN_L.elInRow - (shownMoviesCount % SCREEN_L.elInRow)),
        );
      } else if (!shownMoviesCount) {
        setShownMoviesCount(SCREEN_L.initEl);
      }
    } else if (screenWidth > SCREEN_M.width) {
      if (shownMoviesCount % SCREEN_M.elInRow) {
        setShownMoviesCount(
          shownMoviesCount + (SCREEN_M.elInRow - (shownMoviesCount % SCREEN_M.elInRow)),
        );
      } else if (!shownMoviesCount) {
        setShownMoviesCount(SCREEN_M.initEl);
      }
    } else if (!shownMoviesCount) {
      setShownMoviesCount(SCREEN_S.initEl);
    }
  }, [filtededMovies, screenWidth]);

  useEffect(() => {
    const current = filtededMovies.filter((item, index) => (index < shownMoviesCount));
    setCurrentMovies(current);
    setMoreButtonVisible(current.length !== filtededMovies.length);
  }, [shownMoviesCount, filtededMovies]);

  const handleMoreClick = () => {
    if (screenWidth > SCREEN_XL.width) {
      setShownMoviesCount(shownMoviesCount + SCREEN_XL.elInRow);
    } else if (screenWidth > SCREEN_L.width) {
      setShownMoviesCount(shownMoviesCount + SCREEN_L.elInRow);
    } else {
      setShownMoviesCount(shownMoviesCount + SCREEN_M.elInRow);
    }
  };

  return (
    <main className={'movies'}>
        <SearchForm
          handleSearch={handleSearch}
          disabled={disabled || isLoading}
          handleCheckbox={handleCheckbox} />
        {isLoading
          ? <Preloader />
          : <><MoviesCardList
            disabled={disabled}
            data={currentMovies}
            savedMovies={savedMovies}
            handleCardClick={handleCardClick}/>
            {moreButtonVisible && <button
              disabled={disabled}
              onClick={handleMoreClick}
              className={'more-button'}>
                Ещё
            </button>}
            {currentMovies.length === 0 && <span
              className={'movies__message'}>
                {errorMes}
              </span>}
            </>}
    </main>
  );
};
