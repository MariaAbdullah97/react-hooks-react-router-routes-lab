import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
  <h1>Actors Page</h1>
  {actors.map((actor,index)=>{
    return <div key={index}>
      <ul>
        <li>{actor.name}</li>
        <li>{actor.movies}</li>
      </ul>
    </div>
  })}
</div>;
}

export default Actors;
