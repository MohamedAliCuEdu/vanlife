import React, { useEffect, useState, createContext } from "react";
import { useSearchParams } from "react-router-dom";

import "../../style/pages/vansPage.scss";
import { getVansData } from "../../api";

import VansFilters from "./vansFilters";
import VanCard from "./vanCard";
import Loading from "../../components/loading";
import ErrorDiv from "../../components/errorDiv";

export const vansPageContext = createContext();

function Vans() {
  const [allVans, setAllVans] = useState([]); // all vans data
  const [loading, setLoading] = useState(true); // loading state
  const [fetchError, setFetchError] = useState(false); // fetch error

  // getting vans api:
  useEffect(() => {
    async function loadVans() {
      try {
        let data = await getVansData();
        setAllVans(data);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setLoading(false);
      }
    }
    setTimeout(() => loadVans(), 1000);
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  // filtersObj contain all types of van filter.
  const filtersObj = {
    type: searchParams.get("type"),
    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 200,
  };
  const { type, minPrice, maxPrice } = filtersObj;

  const handleSearchParams = (key, value) => {
    setSearchParams((prevParams) => {
      prevParams.set(key, value);
      return prevParams;
    });
  };

  // filtering vans:
  const filterVansPrice =
    minPrice || maxPrice
      ? allVans.filter((van) => van.price > minPrice && van.price <= maxPrice)
      : allVans;

  const displayVans = !type
    ? filterVansPrice
    : filterVansPrice.filter((van) => van.type === type);

  return (
    <vansPageContext.Provider
      value={{
        allVans,
        handleSearchParams,
        vansCount: displayVans?.length,
        filtersObj,
        searchParams,
        setSearchParams,
      }}
    >
      <main className="vans-page page-content">
        <div className="container">
          <h1>explore our vans options</h1>
          <VansFilters />
          <section className="vans-list">
            {loading ? (
              <Loading />
            ) : fetchError ? (
              <ErrorDiv errorMsg={fetchError}/>
            ) : displayVans.length === 0 ? (
              "there is no vans match!"
            ) : (
              displayVans.map((van) => <VanCard key={van.id} van={van} />)
            )}
          </section>
        </div>
      </main>
    </vansPageContext.Provider>
  );
}

export default Vans;
