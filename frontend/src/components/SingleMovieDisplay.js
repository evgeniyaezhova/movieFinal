import React from "react";
import {Link} from "react-router-dom";
import "./css/SingleMovieDisplay.css"

export const SingleMovieDisplay = ({ img_url }) => {

    return(
      <div className="singleMovieDisplay">
          <div className="singleMovieImage">
              <img src= {img_url} alt='' id="singleMovieImg"/>
          </div>

      </div>
    )
}
