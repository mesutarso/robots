import React from "react";
import Card from "../Card/Card";
import { CardListStyle } from "./CardListStyle";

export default function CardList({ robots }) {
  return (
    <CardListStyle>
      {robots.map(({id,name,email}) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            email={email}
          />
        );
      })}
    </CardListStyle>
  );
}
