import React from "react";
import styled from "styled-components";

const AlignText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function NoFoundText() {
  return (
    <AlignText>
      <h2>Pas de Robot Trouvé</h2>
    </AlignText>
  );
}
