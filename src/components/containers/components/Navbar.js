import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <div  className="navbarColor">
            <ul>
                <li>
                <NavLink to="/" activeClassName="active">
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink to="/explorar" activeClassName="active">
                    Explorar
                </NavLink>
                </li>
                <li>
                <NavLink to="/campaña" activeClassName="active">
                    Crear Campaña
                </NavLink>
                </li>
                <li>
                <NavLink to="/comofunciona" activeClassName="active">
                    ¿Cómo funciona?
                </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default withRouter(Navbar) 
