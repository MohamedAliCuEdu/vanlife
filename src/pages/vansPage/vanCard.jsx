// react component:
import React, { useContext } from "react";
import { NavLink, Link, useSearchParams } from "react-router-dom";
import { vansPageContext } from "./vansPage";

// components:
import FavIcon from "../../components/fav-Icon";

function VanCard({ van }) {
  const { searchParams } = useContext(vansPageContext);
  const { id, name, price, imgUrl, type } = van;

  return (
    <div className="van-card">
      <NavLink to={id} state={{ search: `?${searchParams.toString()}` }}>
        <img src={imgUrl} alt={name} />
      </NavLink>
      <div className="details">
        <div className="top">
          <h2 className="name">{name}</h2>
          <FavIcon id={id} />
        </div>
        <div className="bottom">
          <span className={`type ${type}`}>{type}</span>
          <span className="price">
            {price}
            <sub> /day</sub>
          </span>
        </div>
      </div>
    </div>
  );
}

export default VanCard;
