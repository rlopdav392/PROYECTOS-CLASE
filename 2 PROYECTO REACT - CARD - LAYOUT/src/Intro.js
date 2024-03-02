import React from "react";

export function Intro(props) {
  return (
    <div className="intro">
      <h1>{props.titulo}</h1>
      <p>{props.descripcion}</p>
    </div>
  );
}
