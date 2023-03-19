import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    <div>
    {directors.map((director ,index)=>{
      return <div key={index}>
        <ul>
          <li>{director.name}</li>
          <li>{director.movies}</li>
        </ul>
      </div>
    })}
    </div>
  </div>;
}

export default Directors;
