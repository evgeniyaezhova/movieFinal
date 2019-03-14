import React from "react";
import { Link, withRouter } from "react-router-dom";
import './css/NavBar.css';


class NavBar extends React.Component {

  render(){

    return (

      <div className="nvbr">
      <nav className="navbar">
      <li>
      <Link to="/" className="link">Home</Link>
      </li>
      <li>
      <Link to="/movies" className="link">All Movies</Link>
      </li>
      <li >
      <Link to="/movies/byGenre" className="link">By Genre</Link>
      </li>
      </nav>
      </div>
    )
  }
  }

export default withRouter(NavBar);
