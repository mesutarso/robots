import styled from "styled-components";

export const Titlestyle = styled.div`
  font-size: 2rem;
  line-height: 2rem;
  margin: 30px 0;
  text-align: center;
  @media (max-width: 900px) {
    h1 {
      font-size: 1.8rem;
      line-height: 1.8rem;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 1.6rem;
      line-height: 1.6rem;
    }
  }
`;
