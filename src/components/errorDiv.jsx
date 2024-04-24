import React from "react";

export default function ErrorDiv({errorMsg}) {
  return (
    <div className="errorDiv">
      <h3>error: {errorMsg}</h3>
    </div>
  );
}
