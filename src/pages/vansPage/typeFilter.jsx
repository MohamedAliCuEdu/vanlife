import React from "react";

export default function TypeFilter({type, handleSearchParams}) {
  return (
    <div className="type-filter">
      <button
        className={`simple ${type === "simple" ? "active" : ""}`}
        onClick={() => {
          handleSearchParams("type", "simple");
        }}
      >
        simple
      </button>
      <button
        className={`luxury ${type === "luxury" ? "active" : ""}`}
        onClick={() => {
          handleSearchParams("type", "luxury");
        }}
      >
        luxury
      </button>
      <button
        className={`rugged ${type === "rugged" ? "active" : ""}`}
        onClick={() => {
          handleSearchParams("type", "rugged");
        }}
      >
        ragged
      </button>
    </div>
  );
}
