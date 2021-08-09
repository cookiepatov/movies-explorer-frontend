import React from 'react';

import { SearchForm } from '../SearchForm';

import { MoviesCardList } from '../MoviesCardList';

import './SavedMovies.css';

export const SavedMovies = (props) => {
  const { savedMovies, handleCardClick } = props;
  return (
  <main className={'savedMovies'}>
    <SearchForm />
    <MoviesCardList
      isFromSaved={true}
      data={savedMovies}
      savedMovies={savedMovies}
      handleCardClick={handleCardClick}/>
</main>
  );
};
