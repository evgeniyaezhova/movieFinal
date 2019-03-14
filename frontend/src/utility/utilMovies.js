import axios from "axios";

export const fetchAllMovies = () => {
  return axios.get(`/api/movies`)
};

export const fetchSingleMovie = (id) => {
  return axios.get(`/api/movies/${id}`)
};

export const fetchAllMoviesOfOneGenre = (id) => {
  return axios.get(`/api/genre/${id}`)
};
