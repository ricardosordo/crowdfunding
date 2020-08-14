import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Navbar.css'

import TextField from '@material-ui/core/TextField';



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
                {/* <li>
                <NavLink to="/comofunciona" activeClassName="active">
                    ¿Cómo funciona?
                </NavLink>
                </li> */}
                <li>
                <NavLink to="/campaña" activeClassName=" active">
                    ¡Crear una campaña!
                </NavLink>
                </li>

                <form className= "searchbar" noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Search..." variant="outlined" />
                </form> 

            </ul>
        </div>
    )
}

export default withRouter(Navbar) 
