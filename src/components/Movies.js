import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const movie = movies.map(movie => {
    return (
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.time}</p>
        <ul>
          {movie.genres.map(genre => {
            return (
            <li>{ genre }</li>
            )
            })
          }
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      { movie }
    </div>
  );
};

export default Movies;
