import React from "react";
import { MdOutlineEditNote } from "react-icons/md";

export default function VanInfo({ vanData }) {
  const { name, imgUrl, price } = vanData;
  console.log(vanData);
  return (
    <li>
      <div className="van-info">
        <img src={`${imgUrl}`} alt={`${name}-img`} />
        <div className="txt">
          <h3>{name}</h3>
          <p>${price}/day</p>
        </div>
      </div>
      <button>
        edit
        <MdOutlineEditNote />
      </button>
    </li>
  );
}
