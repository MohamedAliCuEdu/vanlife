// react components:
import React, { useRef, useState } from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";

function FavIcon() {
  // icon - add to favourite & animation:
  const favId = useRef();
  const [fav, setFav] = useState(false);

  function addToFav() {
    setFav(!fav);
  }

  return (
    <span
      ref={favId}
      className={`fav-icon ${fav ? "fav" : ""}`}
      onClick={addToFav}
    >
      {!fav ? <FaRegBookmark /> : <FaBookmark />}
    </span>
  );
}

export default FavIcon;
