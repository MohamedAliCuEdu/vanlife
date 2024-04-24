import React from "react";

function FullVeiw({ name, imgUrl, veiwId, handleImgVeiw }) {
  return (
    <div className="full-veiw" ref={veiwId}>
      <div className="container">
        <button className="close-btn" onClick={handleImgVeiw}>
          X
        </button>
        <img src={imgUrl} alt={name} />
      </div>
    </div>
  );
}

export default FullVeiw;
