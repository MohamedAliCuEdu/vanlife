import React, { useContext } from "react";

import { VanPageContext } from "./vanPage";
function VanSec2() {
  const { vanData } = useContext(VanPageContext);
  const { name, type, price, description, specifications } = vanData;

  // if condition for bg-c to Datatype:
  let bgClass = "";
  switch (type) {
    case "luxury":
      bgClass = "bg-black";
      break;
    case "rugged":
      bgClass = "bg-green";
      break;
    case "simple":
    default:
      bgClass = "bg-orange";
      break;
  }

  return (
    <div className="right">
      <div className="info row">
        <h1>van: {name}</h1>
        <div className="type">
          <h4>type:</h4>
          <span className={bgClass}>{type}</span>
        </div>
        <div className="price">
          <h4>price:</h4>
          <span>
            ${price}
            <sub>/day</sub>
          </span>
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
            <li>{sp}.</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VanSec2;
