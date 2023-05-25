import axios from 'axios';

const API = 'https://api.themoviedb.org/';
const KEY = 'c83afea588f6df33499ccee027813248';

export function getTrending() {
  return axios.get(`${API}3/trending/all/day?api_key=${KEY}`);
}

export function getMovieDetails(movie_id) {
  return axios.get(`${API}3/movie/${movie_id}?api_key=${KEY}`);
}

export function getMovieCredits(movie_id) {
  return axios.get(`${API}3/movie/${movie_id}/credits?api_key=${KEY}`);
}

export function getMovieReviews(movie_id) {
  return axios.get(`${API}3/movie/${movie_id}/reviews?api_key=${KEY}`);
}

export function getMovie(query) {
  return axios.get(`${API}3/search/movie?query=${query}&api_key=${KEY}`);
}
