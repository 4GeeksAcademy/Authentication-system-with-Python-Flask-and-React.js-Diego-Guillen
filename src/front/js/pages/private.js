import React, {useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


const Private = () => {
    const {store, actions} = useContext(Context)
    const navidate = useNavigate();
    
    useEffect(()=>{
        
        const getProfile = async () => {
            console.log("Dentro del useEffect")
            await actions.getUserProfile()
            console.log(store)
        }
        getProfile()
    },[])
    
    return (
        <>
        <h1>Private Page</h1>
        <h3>Welcome {store?.profile?.name}</h3>
        </>
    )
}

export default Private;