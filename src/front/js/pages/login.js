import React, { useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/hooks";
import "../../styles/login.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [isShow, setIsShown] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password_check: "",
  });
  useEffect(() => {
    console.log(store.token);
    store.token && navigate("/private");
    return () => {
      setUser({
        name: "",
        email: "",
        password: "",
        password_check: "",
      });
    };
  }, []);

  const registerUser = async () => {
    if (user.password == user.password_check && user.password != "") {
      const createUser = await actions.createUser(user);
      if (createUser) {
        alert("User was created");
        setUser({
          ...user,
          name: "",
          email: "",
          password: "",
          password_check: "",
        });
        setIsShown(!isShow);
      } else alert("An expected error occurred");
    } else {
      alert("Password doesn't match");
      setUser({ ...user, password: "", password_check: "", password: "" });
    }
  };

  const loginCustomer = async () => {
    const login = await actions.loginUser(user);
    console.log(login);
    if (login) {
      alert("Login was successfully");
      navigate("/private");
    } else {
      alert("Unable to login");
      setUser({
        ...user,
        name: "",
        email: "",
        password: "",
        password_check: "",
      });
    }
  };

  return (
    <div className="login-form">
      <section onSubmit={(e) => e.preventDefault}>
        {!isShow ? <h1>Login</h1> : <h1>Register</h1>}
        <div className="content">
          {isShow && (
            <div className="input-field">
              <input
                type="text"
                value={user.name}
                placeholder="Name"
                autoomplete="nope"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
          )}
          <div className="input-field">
            <input
              type="email"
              value={user.email}
              placeholder="Email"
              autoomplete="nope"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              value={user.password}
              placeholder="Password"
              autoomplete="new-password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          {isShow && (
            <div className="input-field">
              <input
                type="password"
                value={user.password_check}
                placeholder="Repeat Password"
                autoomplete="new-password"
                onChange={(e) =>
                  setUser({ ...user, password_check: e.target.value })
                }
              />
            </div>
          )}
        </div>
        <div className="action">
          <button
            className={!isShow ? "" : "selected"}
            onClick={() => (isShow ? registerUser() : setIsShown(!isShow))}
          >
            Register
          </button>
          <button
            className={isShow ? "" : "selected"}
            onClick={() => (!isShow ? loginCustomer() : setIsShown(!isShow))}
          >
            Sign in
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;
