import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Dashboard from "../component/dashboard";
import { useLocalStorage } from "../hooks/hooks";

const Private = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(store.token);
    !store.token && navigate("/login");
  }, [store.token]);
  console.log(store.profile);

  return (
    <>
      {store?.token ? <Dashboard name={store.profile?.name} /> : navigate("/")}
      {/*navigate("/")*/}
    </>
  );
};

export default Private;
