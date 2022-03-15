import React, { createContext } from "react";
import useState from 'react';

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const navigate = useNavigate ();
    const [user , setUser ] = useState(null);

    const login = (email, password) => {
    console.log("login auth", {email, password});

    if(password === "123"){
        setUser({id: "1234", email});
        navigate("/");
    }
    
};

const logout = () => {
    console.log("logout");
    setUser(null);
    navigate("/login");
        };

        return (

      <AuthContext.Provider  value={{authenticated: !!user, user , login, logout}}>
        {children}
      </AuthContext.Provider>
      
        );

};
