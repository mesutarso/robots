import styled from "styled-components";

export const CardStyle = styled.div`
  background-color: aqua;
  color: #111;
  padding: 30px;
  margin: 1rem;
  text-align: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  p {
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    background-color: blue;
    padding: 1rem;
    margin-top: 2rem;
    color: #fff;
    font-weight: 700;
    text-transform: capitalize;
  }
`;
