import React from "react";
// import {Link} from "react-router-dom"
import {SingleMovieDisplay} from './SingleMovieDisplay';
import "./css/SingleMovieDisplay.css"


class SingleMovie extends React.Component {

  componentDidMount(){

    this.props.fetchSingleMovie(this.props.match.params.id)
  }

  render(){
      if(!this.props.movie) return null
      let { img_url } = this.props.movie
      return(
        <div className="singleMovieParent">
        <SingleMovieDisplay img_url={img_url} />
        </div>
      )
  }
}

export default SingleMovie;
