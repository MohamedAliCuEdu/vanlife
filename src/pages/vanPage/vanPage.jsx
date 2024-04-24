// react components:
import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  createContext,
} from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { BiSolidLeftArrow } from "react-icons/bi";

import VanSec1 from "./vanSec1";
import VanSec2 from "./vanSec2";
import FullVeiw from "./fullVeiw";
import Loading from "../../components/loading";
import ErrorPage from "../errorPage";

import "../../style/pages/van-details.scss";

import { getVansData } from "../../api";

export const VanPageContext = createContext();

function VanPage() {
  const [vanData, setVanData] = useState();
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const param = useParams();
  const locationData = useLocation();

  // fetch van data api:
  useEffect(() => {
    async function loadData() {
      try {
        let data = await getVansData();
        setVanData(data.find((van) => van.id === param.id));
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [param.item]);

  /* close || open Image veiw:
    - make reference for full-img div
    - make function to handle open & close img-view
  */
  const veiwId = useRef();
  function handleImgVeiw() {
    veiwId.current.classList.toggle("veiw");
    document.querySelector(".root").classList.toggle("fit-height");
  }

  return (
    <VanPageContext.Provider value={{ vanData, handleImgVeiw, veiwId }}>
      {loading ? (
        <Loading />
      ) : fetchError ? (
        <ErrorPage />
      ) : (
        <main className="van-page page-content">
          <div className="container">
            <Link
              className="back-btn"
              to={`..${locationData.state.search}`}
              relative="path"
            >
              <BiSolidLeftArrow />
              <span>back to previous page</span>
            </Link>
            <section>
              <VanSec1 />
              <VanSec2 />
            </section>
          </div>
          <FullVeiw />
        </main>
      )}
    </VanPageContext.Provider>
  );
}

export default VanPage;
