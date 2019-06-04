import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          {movie.title}
          <p>Time: {movie.time}</p>
          <p>Genres:</p>{movie.genres.map((genre, index) => (
            <ul key={index}>
              {genre}
            </ul>
          ))}
        </div>
      ))
      }
    </div>
  );
};

export default Movies;
