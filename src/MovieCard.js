import React from "react";
import './MovieCard.css'
import {Link} from "react-router-dom";

const MovieCard = (props) => {
  return (
      <div className="movie_card">

        <div className="poster">
            <img src={props.image} alt=""/>
        </div>

        <div className="info_card">
          <p className="title">{props.title}</p>


        </div>
          <div className="overview">
              <Link to={"/details/"+props.id }><button className="btn btn-success">Details</button></Link>

          </div>
      </div>
  )
}

export default MovieCard
