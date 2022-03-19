import React from 'react';

import './style.css';

const Header = ({ title }) => (
    <div className="header">
        <h1 className="font-weight-bold"> {title?title:'Produtos'} </h1>
    </div>
);

export default Header;
