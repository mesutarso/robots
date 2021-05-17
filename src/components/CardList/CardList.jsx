import React, { Suspense, lazy } from "react";
import Loading from "../Loading/Loading";
import { CardListStyle } from "./CardListStyle";

const Card = lazy(() => import("../Card/Card"));

export default function CardList({ robots }) {
  return (
    <CardListStyle>
      <Suspense fallback={<Loading />}>
        {robots.map(({ id, name, email }) => {
          return <Card key={id} id={id} name={name} email={email} />;
        })}
      </Suspense>
    </CardListStyle>
  );
}
