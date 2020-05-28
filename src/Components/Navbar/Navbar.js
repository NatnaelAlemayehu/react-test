import React from 'react';
import { NavLink } from 'react-router-dom'
export default function Navbar() {   
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <NavLink to="/" className="navbar-brand">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink to="/" className="Navlink">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/register" className="Navlink">Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/search" className="Navlink">Search</NavLink>
                    </li>                    
                </ul>
            </div>
            </nav>           

        </>
    );
}