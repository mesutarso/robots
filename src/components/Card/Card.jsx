import React from "react";
import { Link } from "react-router-dom";
import { CardStyle } from "./CardStyle";

export default function Card({ id, name, email }) {
  return (
    <Link to={`/robot/${id}`}>
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
          <br></br>
          <Link to={`/robot/${id}`}>Voir Plus</Link>
        </div>
      </CardStyle>
    </Link>
  );
}
