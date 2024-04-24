// react components:
import React from "react";
import { Link } from "react-router-dom";

// style files:
import "../style/pages/home.scss";

function HomePage() {
  return (
    <main className="home page-content">
      <div className="container">
        <h1>you got the travel plans, we got the travel vans.</h1>
        <p>
          add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="vans">find your van</Link>
      </div>
    </main>
  );
}

export default HomePage;