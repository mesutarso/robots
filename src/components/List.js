import React from "react";

 function List({ tableau }) {
  return (
    <div>
      <ul>
        {tableau.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
