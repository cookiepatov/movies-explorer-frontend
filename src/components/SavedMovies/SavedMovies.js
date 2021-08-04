import React from 'react';

import { SearchForm } from '../SearchForm';

import { MoviesCardList } from '../MoviesCardList';

import './SavedMovies.css';

export const SavedMovies = () => {
  console.log('SavedMovies');
  return (
  <main>
    {'Hello Saved'}
      <SearchForm />
      <MoviesCardList />
  </main>
  );
};
