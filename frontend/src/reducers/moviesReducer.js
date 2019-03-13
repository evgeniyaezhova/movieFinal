import { RECEIVE_MOVIES, RECEIVE_ONE_MOVIE } from "../actions/actionMovies"
import merge from "lodash/merge";

const normalize = (arrOfObj) => {
  let obj = {};
  for(let i = 0; i < arrOfObj.length; i++){
    obj[arrOfObj[i].id] = arrOfObj[i]
  }
  return obj
}

const moviesReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return normalize(action.movies);
    case RECEIVE_ONE_MOVIE:
      return merge({}, oldState, {[action.movie.id]: action.movie});
    default:
    return oldState
  }
}

export default moviesReducer;
