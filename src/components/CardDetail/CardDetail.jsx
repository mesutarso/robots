import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchUser } from "../../hooks/useFetchUser";

export default function CardDetail({}) {
  const { id } = useParams();
  const robot = useFetchUser(id);
  

  return (
    <div>
      <div className="image-card">
        <img src={`https://robohash.org/${id}`} alt="" />
      </div>
      <div className="user-detail">
        <p>{robot.name}</p>
        <p>{robot.email}</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}
