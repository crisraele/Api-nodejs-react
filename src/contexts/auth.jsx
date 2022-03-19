import React, { createContext , useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { api, findUsuario} from "../services/api";


export const AuthContext = createContext(); 


export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user , setUser ] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const recoveredUser = localStorage.getItem("user");

    if(recoveredUser){
  setUser(JSON.parse(recoveredUser));
  
      }

      setLoading(false);
    }, []);

    //LOGIN
    const login = async (email, password) => {
      
      const response = await findUsuario(email);

      console.log("login", response.data);
       
    const loggedUser = response.data;
    //const token = response.data.token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
   // localStorage.setItem("token", token);

   // api.defaults.headers.Authorization = `Bearer ${token}`;


    if(password === response.data.password){
        setUser(loggedUser);
        navigate("/");
    }
    else {alert("Senha Incorreta!")}
    
};

  //LOGOUT
  const logout = () => {
    console.log("logout");

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    api.defaults.headers.Authorization = null

    setUser(null);
    navigate("/Login");


        };

        return (

      <AuthContext.Provider  value={{authenticated: !!user, user ,loading, login, logout}}>
        {children}
      </AuthContext.Provider>
      
        );

};
