import React, { useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/hooks";
import "../../styles/login.css"
import {Context} from '../store/appContext'
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [token, setToken] = useLocalStorage('token',"")
  const navigate = useNavigate()
  const {store, actions} = useContext(Context)
  const [isShow, setIsShown] = useState(false)
  useEffect(()=>{
    store.isLogin && navigate('/')
  })
  return (
    <div className="login-form">
      <section onSubmit={(e) => e.preventDefault}>
        {
          !isShow ? <h1>Login</h1> : <h1>Register</h1>
        }
        <div className="content">
          {
             isShow && (
              <div className="input-field">
                <input type="text" placeholder="Name" autocomplete="nope" />
              </div>
            )                      
          }
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
          {
            isShow && (
            <div className="input-field">
              <input
                type="password"
                placeholder="Repeat Password"
                autocomplete="new-password"
              />
            </div>
            )
          }
        </div>
        <div className="action">
          <button className={!isShow ? '' : 'selected'} onClick={() => setIsShown(!isShow) }>Register</button>
          <button className={isShow ? '' : 'selected'} onClick={() => setIsShown(!isShow)}>Sign in</button>
        </div>
      </section>
    </div>
  );
};

export default Login;
