import React from 'react';
import { MoviesCard } from './MoviesCard/MoviesCard';
import './MoviesCardList.css';

export const MoviesCardList = (props) => {
  const {
    data, isFromSaved, savedMovies, handleCardClick, disabled,
  } = props;
  return (
  <ul className={'card-list'}>
    {data.map((movie) => <MoviesCard
      disabled={disabled}
      key={movie.id || movie.movieId}
      isFromSaved={isFromSaved}
      movieData={movie}
      isLiked={savedMovies
        .findIndex((item) => (item.movieId === movie.id)
        || (item.movieId === movie.movieId)) !== -1}
      onButtonClick={handleCardClick}/>)}
  </ul>
  );
};
