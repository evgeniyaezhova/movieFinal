import React from "react";
import {Link} from "react-router-dom";
// import "./css/Home.css"

export class Movies extends React.Component {

  componentDidMount(){
    this.props.fetchAllMovies()
  }

  displayAllMovies(){
    let imagesReturned;
    return (imagesReturned = this.props.movies.map((movie, i) => {
      return (
        <div key={i} className="movies" >
        <Link to={"/movies/" + movie.id}>
        <img src={movie.img_url} alt="movieshouldbehere" id="movieImg" />
        </Link>
        </div>
    )
  }))
}

render(){

  return(
    <div className="movieGrandPa">
      <div className="movie-parent">
        <div className="movielist">
        {this.displayAllMovies()}
        </div>
      </div>
    </div>
  )
}
}
