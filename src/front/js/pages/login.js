import React from "react";
import "../../styles/login.css"
const Login = () => {
  return (
    <div className="login-form">
      <section onSubmit={(e) => e.preventDefault}>
        <h1>Login</h1>
        <div className="content">
          <div className="input-field">
            <input type="email" placeholder="Email" autocomplete="nope" />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              autocomplete="new-password"
            />
          </div>
        </div>
        <div className="action">
          <button>Register</button>
          <button className="selected">Sign in</button>
        </div>
      </section>
    </div>
  );
};

export default Login;
