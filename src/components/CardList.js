import React from "react";
import Card from "./Card";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function CardList({ robots }) {
  return (
    <Flex>
      {robots.map((robot) => {
        return <Card id={robot.id} name={robot.name} email={robot.email} />;
      })}
    </Flex>
  );
}
