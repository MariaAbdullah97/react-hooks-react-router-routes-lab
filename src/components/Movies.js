import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1> Movies Page</h1>
      {movies.map((movie ,index)=>{
        return <div key={index}>
          <ul>
            <li>{movie.title}</li>
            <li>{movie.time}</li>
            <li>{movie.genres}</li>
          </ul>
        </div>
      })}
    </div>;
}

export default Movies;
