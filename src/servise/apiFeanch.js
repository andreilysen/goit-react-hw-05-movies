import axios from "axios";

const API_KEY = "5a9486e7363af1432b87b7a7303a7852";
const BASE_URL = "https://api.themoviedb.org";

const getTrendingFilm = () =>
  axios.get(`${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`);

const getSearchMovie = (query) =>
  axios.get(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&page=1&query=${query}`
  );

const getMovieById = (id) =>
  axios.get(`${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=en-US`);

const getMovieCredits = (id) =>
  axios.get(
    `${BASE_URL}/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

export { getTrendingFilm, getSearchMovie, getMovieById, getMovieCredits };
