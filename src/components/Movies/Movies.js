import React, { useEffect, useState } from 'react';

import { Preloader } from './Preloader';

import { SearchForm } from '../SearchForm';

import { MoviesCardList } from '../MoviesCardList';

import { data } from '../../utils/constants/inititalCardsData';

import './Movies.css';

export const Movies = (props) => {
  const { savedMovies, handleCardClick } = props;
  const [isLoading, setIsLoading] = useState('true');
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);
  return (
    <main className={'movies'}>
        <SearchForm />
        {isLoading
          ? <Preloader />
          : <><MoviesCardList
            data={data}
            savedMovies={savedMovies}
            handleCardClick={handleCardClick}/>
            <button className={'more-button'}>Ещё</button>
            </>}
    </main>
  );
};
