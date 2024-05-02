// react component:
import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function RatingStars() {
  let arrOfStars = [
    { id: 1, solid: false },
    { id: 2, solid: false },
    { id: 3, solid: false },
    { id: 4, solid: false },
    { id: 5, solid: false },
  ];

  const [stars, setStars] = useState(arrOfStars);
  const solidStarsCount = stars.filter((e) => e.solid);
  function handleRating(id) {
    if (id === 1 && solidStarsCount.length === 1) {
      setStars(arrOfStars);
    } else {
      setStars(
        arrOfStars.map((prev) =>
          prev.id <= id ? { ...prev, solid: !prev.solid } : prev
        )
      );
    }
  }

  // checking if user rate the van:
  let rated = stars.find((e) => e.solid === true);

  return (
    <div className={`stars ${rated ? "rated" : ""}`}>
      {stars.map((ele) => {
        const { id, solid } = ele;
        return (
          <span
            key={id}
            id={`star-${id}`}
            className={solid ? "filled" : ""}
            onClick={() => handleRating(id)}
          >
            {solid ? <FaStar /> : <FaRegStar />}
          </span>
        );
      })}
    </div>
  );
}

export default RatingStars;
