import SingleMovie from "./SingleMovie";
import { connect } from "react-redux";
import { fetchSingleMovie } from "../actions/actionMovies";

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.movies[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleMovie: (id) => dispatch(fetchSingleMovie(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleMovie);
