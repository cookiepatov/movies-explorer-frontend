import React from 'react';

import { SearchForm } from '../SearchForm';

import { MoviesCardList } from '../MoviesCardList';

import './Movies.css';

export const Movies = () => {
  console.log('Movies');
  return (
    <main>
      {'Hello Movies'}
        <SearchForm />
        <MoviesCardList />
    </main>
  );
};
