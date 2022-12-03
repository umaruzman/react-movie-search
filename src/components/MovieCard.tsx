import React, { useEffect } from "react";

const MovieCard = ({movie}:any) => {

    return (
        <div className="movie">
          <div className='year-sec'>
            <span>{movie?.Year}</span>
          </div>
          <div className='image'>
            <img src={movie?.Poster !== 'N/A' ? movie.Poster :  'https://via.placeholder.com/400'} alt="" />
          </div>
          <div className='title-sec'>
            <span>{movie?.Type}</span>
            <h3>{movie?.Title}</h3>
          </div>
        </div>
    )
}

export default MovieCard;