export const searchStringFiltration = (movies, searchData) => movies
  .filter((movie) => {
    const {
      director, nameEN, nameRU, duration,
    } = movie;
    const { searchString, short } = searchData;
    if ((short && duration > 40) || (!short && duration <= 40)) {
      return false;
    }
    if ((nameEN && nameEN.toLowerCase().includes(searchString.toLowerCase().trim()))
      || (nameRU && nameRU.toLowerCase().includes(searchString.toLowerCase().trim()))
      || (director && director.toLowerCase().includes(searchString.toLowerCase().trim()))) {
      return true;
    }
    return false;
  });
