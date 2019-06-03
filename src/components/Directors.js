import React from 'react';
import { directors } from '../data';

const Directors = () => {

  let director = directors.map(director => {
    return (
      <div>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map(movie => {
            return (
              <li>{movie}</li>
            )
          })}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {director}
    </div>
  );
}

export default Directors
