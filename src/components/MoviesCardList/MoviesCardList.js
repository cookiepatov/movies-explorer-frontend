import React from 'react';
import { MoviesCard } from './MoviesCard/MoviesCard';
import './MoviesCardList.css';

export const MoviesCardList = (props) => {
  const {
    data, isFromSaved, savedMovies, handleCardClick,
  } = props;
  return (
  <ul className={'card-list'}>
    {data.map((movie, index) => <MoviesCard
      key={index}
      isFromSaved={isFromSaved}
      movieData={movie}
      isLiked={savedMovies.findIndex((item) => item.nameRU === movie.nameRU) !== -1}
      onButtonClick={handleCardClick}/>)}
  </ul>
  );
};
