import React from "react";

export default function PriceFilter({ handleChange, handleSubmit, formData }) {
  return (
    <form className="price-filter" onSubmit={(e) => handleSubmit(e)}>
      <div className="inputs">
        <div>
          <label htmlFor="min-price">{`minimum price: $${formData.minPrice}`}</label>
          <input
            type="range"
            name="minPrice"
            id="min-price"
            min="0"
            max="200"
            step="10"
            value={formData.minPrice}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="max-price">{`maximum price: $${formData.maxPrice}`}</label>
          <input
            type="range"
            name="maxPrice"
            id="max-price"
            min="0"
            max="200"
            step="10"
            value={formData.maxPrice}
            onChange={handleChange}
          />
        </div>
      </div>
      <input type="submit" value="search" />
    </form>
  );
}
