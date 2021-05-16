import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchUser } from "../../hooks/useFetchUser";
import { CardDetailStyle } from "./CardDetailStyle";

export default function CardDetail({}) {
  const { id } = useParams();
  const [robot] = useFetchUser(id);

  const { name, email, address, username, website, phone } = robot;

  return (
    <CardDetailStyle>
      <div className="image-card">
        <img src={`https://robohash.org/${id}`} alt="" />
      </div>
      <div className="user-detail">
        <p>
          nom : <strong>{name}</strong>
        </p>
        <p>
          email: <strong>{email}</strong>
        </p>
        <p>
          Nom d'utilisateur <strong>{username}</strong>
        </p>
        <p>
          Numéro téléphone: <strong>{phone}</strong>
        </p>
        <p>
          Avenue: <strong>{address && address.street}</strong>
        </p>
        <p>
          Ville: <strong>{address && address.city} </strong>
        </p>

        <p>
          siteweb: <strong>{website}</strong>
        </p>
        <div className="home-back">
          <Link to="/">Retour chez les robots</Link>
        </div>
      </div>
    </CardDetailStyle>
  );
}
