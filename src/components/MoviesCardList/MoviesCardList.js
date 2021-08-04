import React from 'react';
import { MoviesCard } from './MoviesCard/MoviesCard';
import './MoviesCardList.css';

export const MoviesCardList = () => {
  console.log('MoviesCardList');
  return (
  <ul>
    {'Hello List'}
    <MoviesCard />
  </ul>
  );
};
