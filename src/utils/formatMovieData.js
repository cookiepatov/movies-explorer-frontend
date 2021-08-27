import { beatsApiData } from './constants/apiData';
import { NOT_FOUND_IMG, NOT_FOUND_VIDEO } from './constants/misc';

export const formatMovieData = (movieData) => {
  const {
    country,
    nameEN,
    nameRU,
    director,
    duration,
    created_at: createdAt,
    description,
    image,
    trailerLink,
    id,
  } = movieData;
  const date = new Date(createdAt);
  const movieDataFormatted = {
    country: (country && country.trim()) || 'Неизвестно',
    nameEN: (nameEN && nameEN.trim()) || 'None',
    nameRU: (nameRU && nameRU.trim()) || (nameEN && nameEN.trim()) || 'Неизвестно',
    director: (director && director.trim()) || 'Неизвестно',
    duration: duration || 60,
    movieId: id,
    year: `${date.getFullYear()}`,
    description: description.trim() || 'Отсутствует',
    image: image.url ? beatsApiData.baseUrl + image.url : NOT_FOUND_IMG,
    trailer: trailerLink || NOT_FOUND_VIDEO,
    thumbnail: image.formats.thumbnail.url
      ? beatsApiData.baseUrl + image.formats.thumbnail.url
      : NOT_FOUND_IMG,
  };

  return movieDataFormatted;
};
