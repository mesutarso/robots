import React from "react";
import { Link } from "react-router-dom";
import { CardStyle } from "./CardStyle";
import Skeleton from "react-loading-skeleton";

export default function Card({ id, name, email }) {
  return (
    <CardStyle>
      <img
        src={`https://robohash.org/${id}`}
        alt={name || <Skeleton width={200} heigth={200} />}
        width="200"
        heigth="200"
      />
      <div>
        <p>{name || <Skeleton />} </p>
        <p>{email || <Skeleton />} </p>
        <br></br>
        <Link to={`/robot/${id}`}>Voir Plus</Link>
      </div>
    </CardStyle>
  );
}
