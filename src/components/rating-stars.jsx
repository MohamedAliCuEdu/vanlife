// react component:
import React, { useState } from "react";

function RatingStars() {
  let arrOfStars = [
    { id: 1, solid: false },
    { id: 2, solid: false },
    { id: 3, solid: false },
    { id: 4, solid: false },
    { id: 5, solid: false },
  ];
  const [stars, setStars] = useState(arrOfStars);
  function handleRating(e) {
    setStars(
      arrOfStars.map((prev) =>
        prev.id <= e ? { ...prev, solid: !prev.solid } : prev
      )
    );
  }
  
  return (
    <div className="stars">
      {stars.map((ele) => {
        const { id, solid } = ele;
        return (
          <i
            id={id}
            key={id}
            className={`${solid ? "fa-solid c-gold" : "fa-regular"} fa-star`}
            onClick={() => handleRating(id)}
          ></i>
        );
      })}
    </div>
  );
}

export default RatingStars;
