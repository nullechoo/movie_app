/* eslint-disable react/prop-types */
import React from 'react';
import "./Detail.css";
import { useLocation, Navigate } from "react-router-dom";


export default function Detail(props) {
    const location = useLocation();
    if (!location.state) {
        return <Navigate to="/" />;
    } else {
    return (
        <div className="movie-full">
            <img src={location.state.poster} alt={location.state.name} title={location.state.name} />
            <div className="movie__column">
                <h3 className="movie__title">{location.state.name}</h3>
                <h5 className="movie__year">{location.state.year}</h5>
                <p className="movie__summary">{location.state.description}...</p>
            </div>
        </div>
    );}
};
