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
  const [user, setUser] = useState({
    "name": "",
    "email": "",    
    "password": "",
    "password_check": ""
  })
  useEffect(()=>{
    store.isLogin && navigate('/')
  })
const registerUser = async () => {
  if (customer.password == customer.password_check && customer.password!="") {
    const createUser = await actions.createUser(customer)
    if (createUser) navigate("/")
    else alert("An expected error occurred")
  }
  else {
    alert("Password doesn't match")
    setCustomer({...customer, password : "", password_check : ""})
  }
}
const loginCustomer = () => {
  console.log("login customer")
}

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
                onChange=""
              />
            </div>
            )
          }
        </div>
        <div className="action">
          <button className={!isShow ? '' : 'selected'} onClick={() => isShow ? registerUser() : setIsShown(!isShow) }>Register</button>
          <button className={isShow ? '' : 'selected'} onClick={() => !isShow ? loginCustomer() : setIsShown(!isShow)}>Sign in</button>
        </div>
      </section>
    </div>
  );
};

export default Login;
