import { connect } from "react-redux";
import App from "./App";
import { fetchAllMovies } from "./actions/actionMovies";
// import './css/Home.css'

const mapStateToProps = state => {

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
) (App);
