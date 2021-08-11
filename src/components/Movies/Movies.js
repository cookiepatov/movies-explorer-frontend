import React, { useEffect, useState } from 'react';

import { Preloader } from './Preloader';

import { SearchForm } from '../SearchForm';

import { MoviesCardList } from '../MoviesCardList';

import { data } from '../../utils/constants/inititalCardsData';

import './Movies.css';

export const Movies = (props) => {
  const { savedMovies, handleCardClick, disabled } = props;
  const [isLoading, setIsLoading] = useState('true');
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setMoviesData(data);
    }, 1000);
  }, []);
  return (
    <main className={'movies'}>
        <SearchForm
          disabled={disabled} />
        {isLoading
          ? <Preloader />
          : <><MoviesCardList
            disabled={disabled}
            data={moviesData}
            savedMovies={savedMovies}
            handleCardClick={handleCardClick}/>
            <button
              disabled={disabled}
              className={'more-button'}>
                Ещё
            </button>
            </>}
    </main>
  );
};
