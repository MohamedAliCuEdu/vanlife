import React, { useState, useEffect } from "react";
import { getVansData } from "../../api";

import { FaStar } from "react-icons/fa";
import ErrorDiv from "../../components/errorDiv";
import Loading from "../../components/loading";
import VanInfo from "./vanInfo";
import "../../style/pages/hostPage/dashboard.scss";

function Dashboard() {
  const [allVans, setAllVans] = useState();
  const [fetchError, setFetchError] = useState();
  const [loading, setLoading] = useState(true);

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

  return (
    <section>
      <div className="info">
        <div className="income">
          <h1>welcome!</h1>
          <div className="row">
            <p>
              income last <u>30 days</u>
            </p>
            <a href="#">details</a>
          </div>
          <h2>$2.260</h2>
        </div>
        <div className="review">
          <h1>review score</h1>
          <div className="row">
            <span>
              <FaStar />
              <b>5.0</b>/5
            </span>
            <a href="#">details</a>
          </div>
        </div>
      </div>
      <div className="vans-list">
        <div className="head">
          <h2>your listed vans</h2>
          <button>view all</button>
        </div>
        <ul>
          {loading ? (
            <Loading />
          ) : fetchError ? (
            <ErrorDiv errorMsg={fetchError} />
          ) : (
            allVans.map((van) => <VanInfo key={van.id} vanData={van} />)
          )}
        </ul>
      </div>
    </section>
  );
}

export default Dashboard;
