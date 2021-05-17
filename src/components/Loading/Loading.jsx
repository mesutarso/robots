import React from "react";
import loadingImage from "../../assets/animation_500_korws9z5.gif";
import Skeleton from "../../assets/8418-skeleton-loading-animation.gif";
import styled from "styled-components";

const Loadingstyle = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Loading({ type }) {
  if (type === "card") {
    return (
      <Loadingstyle>
        <img src={Skeleton} alt="chargement..." width="500" />
      </Loadingstyle>
    );
  } else {
    return (
      <Loadingstyle>
        <img src={loadingImage} alt="chargement..." width="500" />
      </Loadingstyle>
    );
  }
}
