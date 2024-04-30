import React, { useContext } from "react";

import { VanPageContext } from "./vanPage";
function VanSec2() {
  const { vanData } = useContext(VanPageContext);
  const { name, type, price, description, specifications } = vanData;

  return (
    <div className="sec-2">
      <div className="info row">
        <h1>van: {name}</h1>
        <div className="label">
          <div className="type">
            <h4>type:</h4>
            <span className={type}>{type}</span>
          </div>
          <div className="price">
            <h4>price:</h4>
            <span>
              ${price}
              <sub>/day</sub>
            </span>
          </div>
        </div>
      </div>
      <div className="description row">
        <h3>description:</h3>
        <p>{description}</p>
      </div>
      <div className="points row">
        <h3>specifications:</h3>
        <ul>
          {specifications.map((sp) => (
            <li key={specifications.indexOf(sp)}>{sp}.</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VanSec2;
