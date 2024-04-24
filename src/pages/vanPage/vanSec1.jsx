import React, { useContext } from "react";
import FavIcon from "../../components/fav-Icon";
import RatingStars from "../../components/rating-stars";
import { FaExpand } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

import { VanPageContext } from "./vanPage";

function VanSec1() {

  const { vanData, handleImgVeiw } = useContext(VanPageContext);
  const {name, imgUrl} = vanData;
console.log(vanData)
  return (
    <div className="left">
      <div className="img-container">
        <div className="img-options">
          <button className="veiw" onClick={handleImgVeiw} title="veiw image.">
            <FaExpand />
          </button>
          <a href={imgUrl} download={name} title="download image">
            <FiDownload />
          </a>
        </div>
        <img src={imgUrl} alt={name} />
      </div>
      <div className="actions">
        <div className="rating">
          <span>rating:</span>
          <RatingStars />
        </div>
        <div className="addfav">
          <span>add to favourites:</span>
          <FavIcon />
        </div>
      </div>
      <button className="rent-btn">rent this van</button>
    </div>
  );
}

export default VanSec1;
