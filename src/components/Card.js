import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: aqua;
  color: #111;
  padding: 30px;
  margin: 0.5rem;
  text-align: center;
`;

export default function Card({id,name,email}) {
  return (
    <Wrapper>
      <img
        src= {`https://robohash.org/${id}`}
        alt={name}
        width="200"
        heigth="200"
      />
      <div>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </Wrapper>
  );
}
