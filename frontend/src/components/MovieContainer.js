import { connect } from "react-redux";
import { Movies } from "./Movies";
import { fetchAllMovies } from "../actions/actionMovies";

const mapStateToProps = (state, ownProps) => {

  return {
    movies: Object.values(state.movies),
    ...ownProps
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
