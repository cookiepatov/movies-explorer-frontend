import { React, useEffect, useState } from 'react';

import { SearchForm } from '../SearchForm';

import { MoviesCardList } from '../MoviesCardList';
import { searchStringFiltration } from '../../utils';

import './SavedMovies.css';

export const SavedMovies = (props) => {
  const { savedMovies, handleCardClick, disabled } = props;
  const [filtededMovies, setFilteredMovies] = useState(savedMovies || []);
  const [lastSearchString, setLastSearchString] = useState('');
  const [isFirstRender, setIsFirstRender] = useState(true);
  const handleSearch = (e, searchData) => {
    setFilteredMovies([]);
    e.preventDefault();
    filterMovies(savedMovies, searchData);
  };

  const filterMovies = (movies, searchData) => {
    setLastSearchString(searchData.searchString);
    const filtered = searchStringFiltration(movies, searchData);
    if (filtered.length > 0) {
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies([]);
    }
  };

  const handleCheckbox = (short) => {
    filterMovies(savedMovies, { searchString: lastSearchString, short });
  };

  const showAll = () => {
    setFilteredMovies(savedMovies);
  };

  useEffect(() => {
    if (isFirstRender && savedMovies.length > 0) {
      setFilteredMovies(savedMovies);
      setIsFirstRender(false);
    } else {
      const newFilteredMovies = filtededMovies
        .filter((currentItem) => savedMovies
          .findIndex((everyItem) => currentItem._id === everyItem._id) !== -1);
      setFilteredMovies(newFilteredMovies);
    }
  }, [savedMovies]);

  return (
  <main className={'savedMovies'}>
    <SearchForm
      handleSearch={handleSearch}
      disabled={disabled}
      handleCheckbox={handleCheckbox} />
    <MoviesCardList
      disabled={disabled}
      isFromSaved={true}
      data={filtededMovies}
      savedMovies={savedMovies}
      handleCardClick={handleCardClick}/>
    {filtededMovies.length === 0 && <span
              className={'movies__nothing'}>
                Ничего не найдено
                {savedMovies.length > 0 && <button
                onClick={showAll}
                disabled={disabled}
                className={'movies__showAll'}>
                  Показать всё
                </button>}
              </span>}
</main>
  );
};
