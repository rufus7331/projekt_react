import React from "react";
import './MovieCard.css'

const MovieCard = (props) => {

    const API_IMG="https://image.tmdb.org/t/p/w500/"

  return (
      <div className="movie_card">
        <div className="poster">
          <img src={props.poster_path ? API_IMG + props.poster_path : "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"} />
        </div>

        <div className="info">
          <p className="title">{props.title}</p>
          <p className="vote">{props.vote_average}</p>

        </div>
          <div className="overview">
              <h2 className="title_overview">Overview:</h2>
              <h3 className="overview_info">{props.overview}</h3>
          </div>
      </div>
  )
}

export default MovieCard
