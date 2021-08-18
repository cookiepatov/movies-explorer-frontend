import React, { useEffect, useState } from 'react';

import { Preloader } from './Preloader';

import { SearchForm } from '../SearchForm';

import { MoviesCardList } from '../MoviesCardList';
import { getBeatMovies, searchStringFiltration } from '../../utils';

import './Movies.css';
import { MOVIES_API_ERROR, NOTHING_FOUND } from '../../utils/constants/messages';

export const Movies = (props) => {
  const {
    savedMovies, handleCardClick, disabled,
  } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [shownMoviesCount, setShownMoviesCount] = useState(0);
  const [filtededMovies, setFilteredMovies] = useState([]);
  const [moreButtonVisible, setMoreButtonVisible] = useState(false);
  const [errorMes, setErrorMes] = useState('');
  const [lastSearchString, setLastSearchString] = useState('');
  useEffect(() => {
    window.addEventListener('resize', () => { setScreenWidth(window.screen.width); });
    const filteredString = localStorage.getItem('lastSearchedMovies');
    if (filteredString) {
      setFilteredMovies(JSON.parse(filteredString));
    }
  }, []);

  const handleSearch = (e, searchData) => {
    setFilteredMovies([]);
    setMoreButtonVisible(false);
    e.preventDefault();
    setIsLoading(true);
    setShownMoviesCount(0);
    getBeatMovies()
      .then((movies) => filterMovies(movies, searchData))
      .catch(() => setErrorMes(MOVIES_API_ERROR))
      .finally(() => setIsLoading(false));
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
      getBeatMovies()
        .then((movies) => filterMovies(movies, { searchString: lastSearchString, short }));
    }
  };

  useEffect(() => {
    if (screenWidth > 1080) {
      if (shownMoviesCount % 4) {
        setShownMoviesCount(shownMoviesCount + (4 - (shownMoviesCount % 4)));
      } else if (!shownMoviesCount) {
        setShownMoviesCount(16);
      }
    } else if (screenWidth > 850) {
      if (shownMoviesCount % 3) {
        setShownMoviesCount(shownMoviesCount + (3 - (shownMoviesCount % 3)));
      } else if (!shownMoviesCount) {
        setShownMoviesCount(12);
      }
    } else if (screenWidth > 520) {
      if (shownMoviesCount % 2) {
        setShownMoviesCount(shownMoviesCount + (2 - (shownMoviesCount % 2)));
      } else if (!shownMoviesCount) {
        setShownMoviesCount(8);
      }
    } else if (!shownMoviesCount) {
      setShownMoviesCount(5);
    }
  }, [filtededMovies, screenWidth]);

  useEffect(() => {
    const current = filtededMovies.filter((item, index) => (index < shownMoviesCount));
    setCurrentMovies(current);
    setMoreButtonVisible(current.length !== filtededMovies.length);
  }, [shownMoviesCount, filtededMovies]);

  const handleMoreClick = () => {
    if (screenWidth > 1080) {
      setShownMoviesCount(shownMoviesCount + 4);
    } else if (screenWidth > 850) {
      setShownMoviesCount(shownMoviesCount + 3);
    } else {
      setShownMoviesCount(shownMoviesCount + 2);
    }
  };

  return (
    <main className={'movies'}>
        <SearchForm
          handleSearch={handleSearch}
          disabled={disabled}
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
