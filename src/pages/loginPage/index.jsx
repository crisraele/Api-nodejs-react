import React, { useContext }  from 'react';
import mypharmaIMG from "../../assets/logo-mypharma-negativa.png";
import useState from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

import "../styles.css";


export const LoginPage = () => {

const{ authenticated, login } = useContext(AuthContext);


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("submit" , {email, password});

        //integração com o contexto e api
        login(email, password);
    };

return (

    <div className="container">
        
      <div className="container-login">
        <div className="wrap-login">
        <p>{String (authenticated)}</p> 
         <form className="login-form"  onSubmit={handleSubmit}>
            <span className="login-form-title"> Bem vindo! </span>

            <span className="login-form-title">
              <img src={mypharmaIMG} alt="Jovem Programador" />
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <Link cllinkssName="txt2" href="#">
                Criar conta
              </Link>
            </div>
            <div className="text-center">
              
              <Link className="txt2" href="#">
                Esqueceu a senha?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
);



};




