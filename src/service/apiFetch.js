import axios from "axios";

const API_KEY = "5a9486e7363af1432b87b7a7303a7852";
const BASE_URL = "https://api.themoviedb.org";

const getTrendingFilm = (page) =>
  axios.get(`${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}&page=${page}`);

const getSearchMovie = (query, page) =>
  axios.get(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&page=${page}&query=${query}`
  );

const getMovieById = (id) =>
  axios.get(`${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=en-US`);

const getMovieCredits = (id) =>
  axios.get(
    `${BASE_URL}/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

const getMoviesReview = (id) =>
  axios.get(
    `${BASE_URL}/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

export {
  getTrendingFilm,
  getSearchMovie,
  getMovieById,
  getMovieCredits,
  getMoviesReview,
};
