import React from "react";
import { Titlestyle } from "./TitleStyle";
import FontStyle from "../../font/font.module.css";

function Title() {
  return (
    <Titlestyle style={FontStyle}>
      <h1>Mes Amis Robots</h1>
    </Titlestyle>
  );
}

export default Title;
