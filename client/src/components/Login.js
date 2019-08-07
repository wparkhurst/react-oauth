import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login" style={{ textAlign: "center" }}>
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Sign In</span>
              <p>Login to your Customer Account.</p>
            </div>
            <div className="card-action">
              <a href="/auth/google">Google Login</a>
            </div>
            <div className="card-action">
              <a href="/auth/azureadoauth2">Microsoft Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
