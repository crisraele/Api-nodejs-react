import React, {useContext} from "react";
import { AuthContext } from "../../contexts/auth";
import { Produtos } from "../../components/index"
//import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ProdutoBox } from './produtos';
import Header  from '../header/header';



export const HomePage = () => {

    const {  logout }= useContext(AuthContext);
    const handleLogout = () =>{

        logout();
    }

return (

   
   <div className="container">
        <Header title="Produtos" />
        <br />
   < ProdutoBox/>
   
   <Produtos />
  <button onClick={handleLogout}>voltar</button>
 </div>
);

};
   



