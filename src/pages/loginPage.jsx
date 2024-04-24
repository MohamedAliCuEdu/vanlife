// react component:
import React from "react";
import { Link } from "react-router-dom";

// style files:
import "../style/pages/sign.scss";

function LoginPage() {
  return (
    <main className="login-page page-content">
      <h1>sign in to your account</h1>
      <form action="">
        <div className="feilds">
          <input type="email" name="email" id="email" />
          <input type="password" name="password" id="password" />
        </div>
        <input type="submit" value="sign in" />
      </form>
      <h3>
        dont't have an account?
        <Link to="signup">create one now</Link>
      </h3>
    </main>
  );
}

export default LoginPage;
