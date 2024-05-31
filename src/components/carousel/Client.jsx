import * as React from "react";

export default function Client({ client }) {
  return (
    <img
      src={`images/${client.image}`}
      alt={client.title}
      width="auto"
      height="50px"
      className="filtered-image"></img>
  );
}
