import React from "react";
import Card from "../Card/Card";
import { CardListStyle } from "./CardListStyle";

export default function CardList({ robots }) {
  return (
    <CardListStyle>
      {robots.map((robot) => {
        return <Card id={robot.id} name={robot.name} email={robot.email} />;
      })}
    </CardListStyle>
  );
}
