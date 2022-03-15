import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate

} from "react-router-dom";

import {LoginPage} from '../pages/loginPage/index';
import {HomePage} from '../pages/homePage/index';

import { AuthProvider } from "../contexts/auth";

export const AppRoutes = () => {
    
return (
    <>
    <Router>
        <AuthProvider >
        <Routes>
            <Route  exact patch="/Login"  element={<LoginPage />} />
            <Route  exact patch="/"  element={<HomePage />} />
        </Routes>
        </AuthProvider>
    </Router>
    </>
);

};








