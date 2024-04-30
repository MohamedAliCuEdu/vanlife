import React, {useContext} from "react";
import { VanPageContext } from "./vanPage";

function FullVeiw() {

  const { vanData, fullViewId, handleImgView } = useContext(VanPageContext);
  const {name, imgUrl} = vanData;

  return (
    <div className="full-view" ref={fullViewId}>
      <div className="container">
        <button className="close-btn" onClick={handleImgView}>
          X
        </button>
        <img src={imgUrl} alt={name} />
      </div>
    </div>
  );
}

export default FullVeiw;
