import React, { useContext } from "react";
import FavIcon from "../../components/fav-Icon";
import RatingStars from "../../components/rating-stars";
import { FaExpand } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

import { VanPageContext } from "./vanPage";

function VanSec1() {

  const { vanData, handleImgView } = useContext(VanPageContext);
  const {name, imgUrl} = vanData;

  return (
    <div className="sec-1">
      <div className="img-container">
        <img src={imgUrl} alt={name} />
        <div className="img-options">
          <button className="view" onClick={handleImgView} title="view image.">
            <FaExpand />
          </button>
          <a href={imgUrl} download={name} title="download image">
            <FiDownload />
          </a>
        </div>
      </div>
      <div className="actions">
        <div className="rating">
          <h3>rating:</h3>
          <RatingStars />
        </div>
        <div className="addfav">
          <h3>add to favourites:</h3>
          <FavIcon />
        </div>
      </div>
      <button className="rent-btn">rent this van</button>
    </div>
  );
}

export default VanSec1;
