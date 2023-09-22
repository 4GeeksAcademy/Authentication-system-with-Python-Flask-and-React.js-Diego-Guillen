import React, { useContext, useEffect } from "react";
import "../../styles/login.css"
import {Context} from '../store/appContext'
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
  const {store, actions} = useContext(Context)
  useEffect(()=>{
    store.isLogin && navigate('/')
  })
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
