import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Dashboard from "../component/dashboard";
import { useLocalStorage } from "../hooks/hooks";

const Private = () => {
  const { store, actions } = useContext(Context);
  const [token, setToken] = useLocalStorage("token", "");
  const navigate = useNavigate();

  useEffect(() => {
    setToken(token, "");
    //store.token = token
    console.log(store.token);
    if (store.token != "") {
      const getProfile = async () => {
        console.log("Dentro del useEffect");
        await actions.getUserProfile(store.token);
        console.log(store.profile);
      };
      getProfile();
    } else if (token != "") {
      const getProfile = async () => {
        console.log("Dentro del token storage");
        await actions.getUserProfile(token);
        console.log(store.profile);
      };
      getProfile();
    } else navigate("/");
  }, []);
  //console.log(store.token)

  return (
    <>
      {token != "" ? <Dashboard name={store?.profile?.name} /> : navigate("/")}
    </>
  );
};

export default Private;
