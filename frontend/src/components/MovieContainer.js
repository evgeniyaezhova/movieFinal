import { connect } from "react-redux";
import { Movies } from "./Movies";
import { fetchAllMovies } from "../actions/actionMovies";

const mapStateToProps = (state) => {

  return {
    movies: Object.values(state.movies)
  };
};

const mapDispatchToProps = dispatch => {

  return {
    fetchAllMovies: () => dispatch(fetchAllMovies())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
) (Movies);
