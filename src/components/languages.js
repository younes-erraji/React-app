import React, { Component } from "react";

function Languages(prop) {
  return (
    <div>
      <h1>{prop.p.name}</h1>
      <p>{prop.p.progress}</p>
    </div>
  );
}
export { Languages };
