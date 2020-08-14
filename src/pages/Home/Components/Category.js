import React from 'react';
//import { Link, NavLink, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import '../../Home/Home.css'



function Category () {
    return (
        <>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center">
        <div className="Category.bar">
            <ul className="Categories">
                <a className="active" href="#">Todas las categorias</a>
                <a href="#">Educación</a>
                <a href="#">Tecnología</a>
                <a href="#">Salud</a>
                <a href="#">Arte</a>
                <a href="#">Emprendimiento</a>
                <hr className="stroke"></hr>
            </ul>
        </div>
        </Grid>
        </>
    )
}

export default (Category) 
