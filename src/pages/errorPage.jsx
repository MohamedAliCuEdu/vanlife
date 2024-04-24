// react components:
import React from "react";
import { Link } from "react-router-dom";

// style files:
import "../style/pages/error-page.scss";

function ErrorPage() {
  return (
    <main className="error-page page-content">
      <div className="container">
        <span className="status-code">404</span>
        <p>error: the page you were looking for, was not found.</p>
        <Link to="/" className="">
          return to home
        </Link>
      </div>
    </main>
  );
}

export default ErrorPage;
