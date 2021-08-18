import { beatsApiData } from './constants/apiData';

export const getBeatMovies = () => fetch(`${beatsApiData.baseUrl}/beatfilm-movies`).then((res) => (res.ok ? res.json() : Promise.reject(new Error(`Ошибка: ${res.status}`))));
