import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../../assets/404.svg";
import styled from "styled-components";

export default function NotFound() {
  return (
    <NotFoundStyle>
      <img src={notFoundImage} alt="page not found" />
      <Link to="/">Retour à l'accueil</Link>
    </NotFoundStyle>
  );
}

const NotFoundStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 30px;
    font-weight: 700;
    color: #010101;
    background-color: #fff;
    padding: 16px 25px;
    margin-top: 20px;
    transition: all 0.25s ease-in-out;
    &:hover {
      color: #fff;
      background-color: #010101;
    }
  }
`;
