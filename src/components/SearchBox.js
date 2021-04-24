import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 70%;
  padding: 10px;
  border: 1px solide aqua;
`;
const Flex = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export default function SearchBox() {
  return (
    <Flex>
      <Input type="search" placeholder="Rechercher par nom" />
    </Flex>
  );
}
