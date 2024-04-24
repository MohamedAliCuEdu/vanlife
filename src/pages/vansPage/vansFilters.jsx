import React, { useState, useContext, useRef } from "react";
import { vansPageContext } from "./vansPage";
import PriceFilter from "./priceFilter";
import TypeFilter from "./typeFilter";

function VansFilters() {
  const { filtersObj, vansCount, handleSearchParams, setSearchParams } =
    useContext(vansPageContext);

  const { type, minPrice, maxPrice } = filtersObj;
  // 1) form data object
  const [formData, setFormData] = useState({
    minPrice: minPrice,
    maxPrice: maxPrice,
  });
  // 2) handle inputs change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  // 3) add prices to searchParams
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchParams("minPrice", formData.minPrice);
    handleSearchParams("maxPrice", formData.maxPrice);
  };
  // reset all filters:
  const resetFilters = () => {
    setSearchParams({});
    setFormData({
      minPrice: minPrice,
      maxPrice: maxPrice,
    });
  };

  return (
    <nav className="filters">
      <div className="row-1">
        <TypeFilter type={type} handleSearchParams={handleSearchParams} />
        <PriceFilter
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
        />
      </div>

      <div className="row-2">
        <button className="clear-filter" onClick={resetFilters}>
          reset
        </button>
        <span>Vans Count: {vansCount}</span>
      </div>
    </nav>
  );
}

export default VansFilters;
