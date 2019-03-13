import * as moviesApi from "../utility/utilMovies";

export let RECEIVE_MOVIES = "RECEIVE_MOVIES";
export let RECEIVE_ONE_MOVIE = "RECEIVE_ONE_MOVIE";
// export let RECEIVE_MOVIES_BY_GENRE = "RECEIVE_MOVIES_BY_GENRE";

export const receiveMovies = movies => {
  return {
    type: RECEIVE_MOVIES,
    movies: movies
  };
};

export const fetchAllMovies = () => dispatch => {
  return moviesApi
  .fetchAllMovies()
  .then(res => {
    return dispatch(receiveMovies(res.data.movies))
  })
  .catch(err => {
    console.log(err)
  });

};

export const receiveOneMovie = movie => {
  return {
    type: RECEIVE_ONE_MOVIE,
    movie: movie
  };
};

export const fetchSingleMovie = (id) => dispatch => {
  return moviesApi
  .fetchSingleMovie(id)
  .then(res => {

    return dispatch(receiveOneMovie(res.data.movie))
  })
  .catch(err => {
    console.log(err)
  });

};
