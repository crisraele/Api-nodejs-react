import React, { useContext } from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate

} from "react-router-dom";

import { LoginPage } from '../pages/loginPage/index';
import { HomePage } from '../pages/homePage/index';
import { AuthProvider, AuthContext } from "../contexts/auth";


export const AppRouter = () => {
            const Private = ({children}) => {
                const { authenticated, loading} = useContext(AuthContext);

                if(loading) {
                    return <div className="loading">Carregando...</div>
                }

        if(!authenticated) {
            return < Navigate to= "/Login" />;
        }

        return children;

    };
return (
    
    <Router>
        <AuthProvider >
        <Routes>
            <Route exact path="/Login"  element={<LoginPage /> } />
            <Route  path="/"  element={<Private><HomePage /> </Private> } />
        </Routes>
        </AuthProvider>
    </Router>
    
);

};








