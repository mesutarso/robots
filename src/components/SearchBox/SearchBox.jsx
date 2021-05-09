import React from "react";
import { Searchboxstyle } from "./SearchBoxstyle";

export default function SearchBox({ onChange, value }) {
  return (
    <Searchboxstyle>
      <input
        type="search"
        placeholder="Rechercher par nom"
        onChange={onChange}
        value={value}
      />
    </Searchboxstyle>
  );
}
