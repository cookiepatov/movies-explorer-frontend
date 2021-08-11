import React from 'react';

import { SearchForm } from '../SearchForm';

import { MoviesCardList } from '../MoviesCardList';

import './SavedMovies.css';

export const SavedMovies = (props) => {
  const { savedMovies, handleCardClick, disabled } = props;
  return (
  <main className={'savedMovies'}>
    <SearchForm
      disabled={disabled} />
    <MoviesCardList
      disabled={disabled}
      isFromSaved={true}
      data={savedMovies}
      savedMovies={savedMovies}
      handleCardClick={handleCardClick}/>
</main>
  );
};
