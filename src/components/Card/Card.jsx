import React from "react";
import { CardStyle } from "./CardStyle";

export default function Card({ id, name, email }) {
  return (
    <CardStyle>
      <img
        src={`https://robohash.org/${id}`}
        alt={name}
        width="200"
        heigth="200"
      />
      <div>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </CardStyle>
  );
}
