import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css";

function Navigation(){
    return (
        <div className="nav">
            <Link className="nav-link" to="/">Главная</Link>
            <Link className="nav-link" to="/about">О проекте</Link>
        </div>
    );
}

export default Navigation;