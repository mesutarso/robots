import styled from "styled-components";

export const CardDetailStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;

  margin: auto;
  transform: translateY(25%);
  background-color: #010101;

  .image-card {
    width: 50%;

    > img {
      max-width: 100%;
    }
  }
  .user-detail {
    font-size: 1.7em;
    background-color: #a86d57;
    color: #fff;
    width: 100%;
    padding: 30px;
    p {
      margin: 20px 0;
    }
    a {
      text-decoration: none;
      background-color: #5792a8;
      padding: 16px 25px;
      color: #fff;
      text-transform: uppercase;
    }
  }
`;
